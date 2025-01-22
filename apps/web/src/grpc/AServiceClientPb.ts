/**
 * @fileoverview gRPC-Web generated client stub for
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: packages/grpc/a.proto

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from "grpc-web";

import * as packages_grpc_a_pb from "../grpc/a_pb"; // proto import: "packages/grpc/a.proto"

export class QuestionServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any },
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options["format"] = "text";

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, "");
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetQuestionById = new grpcWeb.MethodDescriptor(
    "/QuestionService/GetQuestionById",
    grpcWeb.MethodType.UNARY,
    packages_grpc_a_pb.GetQuestionRequest,
    packages_grpc_a_pb.Question,
    (request: packages_grpc_a_pb.GetQuestionRequest) => {
      return request.serializeBinary();
    },
    packages_grpc_a_pb.Question.deserializeBinary,
  );

  getQuestionById(
    request: packages_grpc_a_pb.GetQuestionRequest,
    metadata?: grpcWeb.Metadata | null,
  ): Promise<packages_grpc_a_pb.Question>;

  getQuestionById(
    request: packages_grpc_a_pb.GetQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: packages_grpc_a_pb.Question,
    ) => void,
  ): grpcWeb.ClientReadableStream<packages_grpc_a_pb.Question>;

  getQuestionById(
    request: packages_grpc_a_pb.GetQuestionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: packages_grpc_a_pb.Question,
    ) => void,
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/QuestionService/GetQuestionById",
        request,
        metadata || {},
        this.methodDescriptorGetQuestionById,
        callback,
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/QuestionService/GetQuestionById",
      request,
      metadata || {},
      this.methodDescriptorGetQuestionById,
    );
  }

  methodDescriptorSearchQuestionsByTitle = new grpcWeb.MethodDescriptor(
    "/QuestionService/SearchQuestionsByTitle",
    grpcWeb.MethodType.UNARY,
    packages_grpc_a_pb.SearchQuestionsRequest,
    packages_grpc_a_pb.SearchQuestionsResponse,
    (request: packages_grpc_a_pb.SearchQuestionsRequest) => {
      return request.serializeBinary();
    },
    packages_grpc_a_pb.SearchQuestionsResponse.deserializeBinary,
  );

  searchQuestionsByTitle(
    request: packages_grpc_a_pb.SearchQuestionsRequest,
    metadata?: grpcWeb.Metadata | null,
  ): Promise<packages_grpc_a_pb.SearchQuestionsResponse>;

  searchQuestionsByTitle(
    request: packages_grpc_a_pb.SearchQuestionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: packages_grpc_a_pb.SearchQuestionsResponse,
    ) => void,
  ): grpcWeb.ClientReadableStream<packages_grpc_a_pb.SearchQuestionsResponse>;

  searchQuestionsByTitle(
    request: packages_grpc_a_pb.SearchQuestionsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: packages_grpc_a_pb.SearchQuestionsResponse,
    ) => void,
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/QuestionService/SearchQuestionsByTitle",
        request,
        metadata || {},
        this.methodDescriptorSearchQuestionsByTitle,
        callback,
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/QuestionService/SearchQuestionsByTitle",
      request,
      metadata || {},
      this.methodDescriptorSearchQuestionsByTitle,
    );
  }
}
