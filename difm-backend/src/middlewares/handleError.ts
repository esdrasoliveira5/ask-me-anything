import { Request, Response } from 'express';

class HandleError {
  genericError = (
    err: Error,
    _req: Request,
    res: Response,
  ) => {
    console.error(err);
    return res.status(500).json({ error: `Erro: ${err.message}` });
  };
}

export default HandleError;