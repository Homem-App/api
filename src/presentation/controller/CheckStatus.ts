import { okResponse } from '../helper/http-helper'; 
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class CheckStatusController implements Controller {

  async index (httpRequest?: HttpRequest): Promise<HttpResponse> {
    return okResponse('ok')
  }
}