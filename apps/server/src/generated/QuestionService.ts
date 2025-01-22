// Original file: packages/grpc/a.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetQuestionRequest as _GetQuestionRequest, GetQuestionRequest__Output as _GetQuestionRequest__Output } from './GetQuestionRequest';
import type { Question as _Question, Question__Output as _Question__Output } from './Question';
import type { SearchQuestionsRequest as _SearchQuestionsRequest, SearchQuestionsRequest__Output as _SearchQuestionsRequest__Output } from './SearchQuestionsRequest';
import type { SearchQuestionsResponse as _SearchQuestionsResponse, SearchQuestionsResponse__Output as _SearchQuestionsResponse__Output } from './SearchQuestionsResponse';

export interface QuestionServiceClient extends grpc.Client {
  GetQuestionById(argument: _GetQuestionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  GetQuestionById(argument: _GetQuestionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  GetQuestionById(argument: _GetQuestionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  GetQuestionById(argument: _GetQuestionRequest, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  getQuestionById(argument: _GetQuestionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  getQuestionById(argument: _GetQuestionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  getQuestionById(argument: _GetQuestionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  getQuestionById(argument: _GetQuestionRequest, callback: grpc.requestCallback<_Question__Output>): grpc.ClientUnaryCall;
  
  SearchQuestionsByTitle(argument: _SearchQuestionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  SearchQuestionsByTitle(argument: _SearchQuestionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  SearchQuestionsByTitle(argument: _SearchQuestionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  SearchQuestionsByTitle(argument: _SearchQuestionsRequest, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  searchQuestionsByTitle(argument: _SearchQuestionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  searchQuestionsByTitle(argument: _SearchQuestionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  searchQuestionsByTitle(argument: _SearchQuestionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  searchQuestionsByTitle(argument: _SearchQuestionsRequest, callback: grpc.requestCallback<_SearchQuestionsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface QuestionServiceHandlers extends grpc.UntypedServiceImplementation {
  GetQuestionById: grpc.handleUnaryCall<_GetQuestionRequest__Output, _Question>;
  
  SearchQuestionsByTitle: grpc.handleUnaryCall<_SearchQuestionsRequest__Output, _SearchQuestionsResponse>;
  
}

export interface QuestionServiceDefinition extends grpc.ServiceDefinition {
  GetQuestionById: MethodDefinition<_GetQuestionRequest, _Question, _GetQuestionRequest__Output, _Question__Output>
  SearchQuestionsByTitle: MethodDefinition<_SearchQuestionsRequest, _SearchQuestionsResponse, _SearchQuestionsRequest__Output, _SearchQuestionsResponse__Output>
}
