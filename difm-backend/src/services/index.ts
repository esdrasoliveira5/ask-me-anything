import { Model } from '../interfaces/ModelInterface';
import {
  ResponseError,
  ResponseCreate,
} from '../interfaces/ResponsesInterface';

abstract class Service<T> {
  constructor(public model: Model<T>) {}

  abstract create(obj: T): Promise<ResponseCreate<T> | ResponseError>;
}

export default Service;