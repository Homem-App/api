import { Request, Response } from 'express';
import { Controller } from '../../presentation/protocols';

export const adaptRoute = (controllerRoute: Controller) => async (req: Request, res: Response) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  };
  const httpResponse = await controllerRoute.handler(httpRequest);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}
