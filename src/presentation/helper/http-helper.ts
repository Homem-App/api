import { httpStatusCode, httpStatusText } from '../enum/http-enum';
import { ServerError } from '../erros';
import { HttpResponse } from '../protocols';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: httpStatusCode.BAD_REQUEST,
  body: error || httpStatusText.BAD_REQUEST,
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: httpStatusCode.SERVER_ERROR,
  body: new ServerError(error.stack) || httpStatusText.SERVER_ERROR,
})

export const okResponse = (data: any): HttpResponse => ({
  statusCode: httpStatusCode.OK,
  body: data || httpStatusText.OK,
})
