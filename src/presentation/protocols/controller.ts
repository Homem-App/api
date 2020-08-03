import { HttpRequest, HttpResponse } from './http';

export interface Controller {
  index (httpRequest?: HttpRequest): Promise<HttpResponse>
}