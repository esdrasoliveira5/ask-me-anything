import { ZodError } from 'zod';

export type Status = {
  status: number;
};

export type Error = {
  error: ZodError | string;
};

export interface ResponseError extends Status {
  response: Error
}

export interface ResponseCreate<T> extends Status {
  response: T;
}
