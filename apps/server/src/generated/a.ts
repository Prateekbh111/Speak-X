import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { QuestionServiceClient as _QuestionServiceClient, QuestionServiceDefinition as _QuestionServiceDefinition } from './QuestionService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Block: MessageTypeDefinition
  GetQuestionRequest: MessageTypeDefinition
  Option: MessageTypeDefinition
  Question: MessageTypeDefinition
  QuestionService: SubtypeConstructor<typeof grpc.Client, _QuestionServiceClient> & { service: _QuestionServiceDefinition }
  SearchQuestionsRequest: MessageTypeDefinition
  SearchQuestionsResponse: MessageTypeDefinition
}

