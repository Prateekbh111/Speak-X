import "dotenv/config";
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";
import { Question } from "./model/question.model";
import { QuestionServiceHandlers } from "./generated/QuestionService";
import { Block } from "./generated/Block";
import { Option } from "./generated/Option";
import connectToDB from "./db";
import { MongooseBaseQueryOptions } from "mongoose";

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, "../../../packages/grpc/a.proto"),
);

const questionProto = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as ProtoGrpcType;

const handlers: QuestionServiceHandlers = {
  GetQuestionById: async (call, callback) => {
    try {
      const question = await Question.findById(call.request.questionId).lean();
      if (!question) {
        return callback({
          code: grpc.status.NOT_FOUND,
          message: "Question not found",
        });
      }
      callback(null, formatQuestion(question));
    } catch (error) {
      console.error("Error fetching question:", error);
      callback({
        code: grpc.status.INTERNAL,
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
  SearchQuestionsByTitle: async (call, callback) => {
    try {
      const searchTitle = call.request.title;
      const limit = call.request.limit || 10;
      const skip = call.request.skip || 0;
      const type = call.request.type === "All" ? "" : call.request.type;

      const query: MongooseBaseQueryOptions = {
        title: { $regex: searchTitle, $options: "i" },
      };
      if (type) {
        query.type = type;
      }

      const questions = await Question.find(query).limit(limit).skip(skip);

      callback(null, { questions: questions.map(formatQuestion) });
    } catch (error) {
      console.error("Unknown error occurred");
      callback({
        code: grpc.status.INTERNAL,
        message: "An unknown error occurred",
      });
    }
  },
};

function formatQuestion(question: any) {
  return {
    id: question._id.toString(),
    type: question.type,
    title: question.title,
    blocks: question.blocks
      ? question.blocks.map((block: Block) => ({
          text: block.text || "",
          showInOption: block.showInOption || false,
          isAnswer: block.isAnswer || false,
        }))
      : [],
    options: question.options
      ? question.options.map((option: Option) => ({
          text: option.text || "",
          isCorrectAnswer: option.isCorrectAnswer || false,
        }))
      : [],
    solution: question.solution || "",
    anagramType: question.anagramType || "",
    siblingId: question.siblingId ? question.siblingId.toString() : "",
  };
}

connectToDB(`${process.env.DB_URI}/${process.env.DB_NAME}`)
  .then(() => {
    const server = new grpc.Server();

    server.addService(questionProto.QuestionService.service, handlers);

    server.bindAsync(
      "0.0.0.0:5173",
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Server running at http://0.0.0.0:${port}`);
      },
    );
  })
  .catch((err) => {
    console.log(
      "Failed to start the server, no connection with database established.",
      err,
    );
  });
