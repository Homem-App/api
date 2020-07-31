const { okResponse, serverError } = require('../helper/http-helper');
const { listAll } = require('../../domain/article/use-cases/list-articles');

class Article {
  constructor ({ articleDbService }) {
    this.articleDbService = articleDbService;
  }

  async index () {
    try {
      const articles = await listAll({
        articleDbService: this.articleDbService,
      });
      
      return okResponse(articles)  
    } catch (error) {
      return serverError(error);
    }
    
  }
}

module.exports = Article;