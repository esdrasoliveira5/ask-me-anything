export type Status = {
  status: number;
};

export interface ResponseError extends Status {
  response: {
    error: string,
  }
}

export interface ResponseCreate<T> extends Status {
  response: T;
}
