// Original file: packages/grpc/a.proto

import type { Block as _Block, Block__Output as _Block__Output } from './Block';
import type { Option as _Option, Option__Output as _Option__Output } from './Option';

export interface Question {
  'id'?: (string);
  'type'?: (string);
  'title'?: (string);
  'blocks'?: (_Block)[];
  'options'?: (_Option)[];
  'solution'?: (string);
  'anagramType'?: (string);
  'siblingId'?: (string);
}

export interface Question__Output {
  'id': (string);
  'type': (string);
  'title': (string);
  'blocks': (_Block__Output)[];
  'options': (_Option__Output)[];
  'solution': (string);
  'anagramType': (string);
  'siblingId': (string);
}
