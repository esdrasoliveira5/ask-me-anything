import { ZodError } from 'zod';

export interface Status {
  status: number;
}

export interface Error {
  error: ZodError | string;
}

export interface ResponseError extends Status {
  response: Error
}

export interface ResponseCreate<T> extends Status {
  response: T;
}

export interface ResponseRead<T> extends Status {
  response: T[];
}

export interface ResponseReadOne<T> extends Status {
  response: T;
}