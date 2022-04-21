export enum StatusCodes {
  OK = 200,
  CREATED,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED,
  NOT_FOUND = 404,
  INVALID = 422,
  INTERNAL = 500,
}
export enum MessageErrors {
  INTERNAL = 'Internal Server Error',
  NOT_FOUND = 'Object not found',
  BAD_REQUEST = 'Bad request',
  INVALID_TOKEN = 'Invalid token',
  INVALID_PASSWORD = 'Invalid password',
}