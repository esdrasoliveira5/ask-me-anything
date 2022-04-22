import { Request, Response } from 'express';
import {
  RequestWithBody,
  RequestWithParams,
} from '../interfaces/RequestWithBodyI';

import Service from '../services';

abstract class Controller<T> {
  abstract route: string;

  constructor(public service: Service<T>) {}

  abstract create(req: RequestWithBody<T>, res: Response):
  Promise<typeof res>;

  abstract read(_req: Request, res: Response):
  Promise<typeof res>;

  abstract readOne(req: RequestWithParams, res: Response):
  Promise<typeof res>;
}

export default Controller;