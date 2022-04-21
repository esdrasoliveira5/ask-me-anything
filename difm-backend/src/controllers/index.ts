import { Response } from 'express';
import { RequestWithBody } from '../interfaces/RequestWithBodyI';

import Service from '../services';

abstract class Controller<T> {
  abstract route: string;

  constructor(public service: Service<T>) {}

  abstract create(req: RequestWithBody<T>, res: Response<T | Error>):
  Promise<typeof res>;
}

export default Controller;