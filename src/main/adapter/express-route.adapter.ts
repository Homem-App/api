import { Request, Response } from 'express';

// TODO INTERFACE controllerRoute
export const adaptRoute = (controllerRoute: any) => async (req: Request, res: Response) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  };
  const httpResponse = await controllerRoute(httpRequest);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}
