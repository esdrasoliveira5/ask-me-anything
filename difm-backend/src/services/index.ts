import { MessageErrors, StatusCodes } from '../enums';
import { Model } from '../interfaces/ModelInterface';
import {
  ResponseError,
  ResponseCreate,
  ResponseRead,
} from '../interfaces/ResponsesInterface';
import Bcrypt from '../validations/Bcrypt';
import JwToken from '../validations/JwtToken';
import Validations from '../validations/Validations';

abstract class Service<T> {
  protected status = StatusCodes;

  protected errors = MessageErrors;

  protected validation = new Validations();

  protected bcrypt = new Bcrypt();

  protected jwt = new JwToken();

  constructor(public model: Model<T>) {}

  abstract create(obj: T): Promise<ResponseCreate<T> | ResponseError>;

  abstract read(): Promise<ResponseRead<T> | ResponseError>;
}

export default Service;