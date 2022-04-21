import { MessageErrors, StatusCodes } from '../enums';
import { Model } from '../interfaces/ModelInterface';
import {
  ResponseError,
  ResponseCreate,
} from '../interfaces/ResponsesInterface';
import Validations from '../validations/Validations';

abstract class Service<T> {
  protected status = StatusCodes;

  protected errors = MessageErrors;

  protected validation = new Validations();

  constructor(public model: Model<T>) {}

  abstract create(obj: T): Promise<ResponseCreate<T> | ResponseError>;
}

export default Service;