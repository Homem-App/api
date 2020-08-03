import { okResponse, serverError } from '../../helper/http-helper'; 
import { Controller } from '../../protocols';
import { HttpRequest,HttpResponse } from '../../protocols';
import { listAll } from '../../../domain/article/use-cases/list-articles';

export class ListArticle implements Controller {
  
  private readonly articleDbService: any;

  constructor (articleDbService) {
    this.articleDbService = articleDbService;
  }
  async handler(httpRequest?: HttpRequest): Promise<HttpResponse> {
    try {
      const articles = await listAll(this.articleDbService);
      return okResponse(articles);
    } catch (error) {
      console.log(error)
      return serverError(error);
    }

  }

  
}