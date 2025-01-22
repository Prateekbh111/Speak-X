import * as jspb from 'google-protobuf'



export class GetQuestionRequest extends jspb.Message {
  getQuestionId(): string;
  setQuestionId(value: string): GetQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuestionRequest): GetQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: GetQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuestionRequest;
  static deserializeBinaryFromReader(message: GetQuestionRequest, reader: jspb.BinaryReader): GetQuestionRequest;
}

export namespace GetQuestionRequest {
  export type AsObject = {
    questionId: string,
  }
}

export class SearchQuestionsRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SearchQuestionsRequest;

  getLimit(): number;
  setLimit(value: number): SearchQuestionsRequest;

  getSkip(): number;
  setSkip(value: number): SearchQuestionsRequest;

  getType(): string;
  setType(value: string): SearchQuestionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuestionsRequest): SearchQuestionsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchQuestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuestionsRequest;
  static deserializeBinaryFromReader(message: SearchQuestionsRequest, reader: jspb.BinaryReader): SearchQuestionsRequest;
}

export namespace SearchQuestionsRequest {
  export type AsObject = {
    title: string,
    limit: number,
    skip: number,
    type: string,
  }
}

export class SearchQuestionsResponse extends jspb.Message {
  getQuestionsList(): Array<Question>;
  setQuestionsList(value: Array<Question>): SearchQuestionsResponse;
  clearQuestionsList(): SearchQuestionsResponse;
  addQuestions(value?: Question, index?: number): Question;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuestionsResponse): SearchQuestionsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchQuestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuestionsResponse;
  static deserializeBinaryFromReader(message: SearchQuestionsResponse, reader: jspb.BinaryReader): SearchQuestionsResponse;
}

export namespace SearchQuestionsResponse {
  export type AsObject = {
    questionsList: Array<Question.AsObject>,
  }
}

export class Question extends jspb.Message {
  getId(): string;
  setId(value: string): Question;

  getType(): string;
  setType(value: string): Question;

  getTitle(): string;
  setTitle(value: string): Question;

  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): Question;
  clearBlocksList(): Question;
  addBlocks(value?: Block, index?: number): Block;

  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): Question;
  clearOptionsList(): Question;
  addOptions(value?: Option, index?: number): Option;

  getSolution(): string;
  setSolution(value: string): Question;

  getAnagramtype(): string;
  setAnagramtype(value: string): Question;

  getSiblingid(): string;
  setSiblingid(value: string): Question;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Question.AsObject;
  static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
  static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Question;
  static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
  export type AsObject = {
    id: string,
    type: string,
    title: string,
    blocksList: Array<Block.AsObject>,
    optionsList: Array<Option.AsObject>,
    solution: string,
    anagramtype: string,
    siblingid: string,
  }
}

export class Block extends jspb.Message {
  getText(): string;
  setText(value: string): Block;

  getShowinoption(): boolean;
  setShowinoption(value: boolean): Block;

  getIsanswer(): boolean;
  setIsanswer(value: boolean): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    text: string,
    showinoption: boolean,
    isanswer: boolean,
  }
}

export class Option extends jspb.Message {
  getText(): string;
  setText(value: string): Option;

  getIscorrectanswer(): boolean;
  setIscorrectanswer(value: boolean): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option.AsObject;
  static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
  export type AsObject = {
    text: string,
    iscorrectanswer: boolean,
  }
}

