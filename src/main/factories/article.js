const Article = require('../../presentation/controller/Article');
const articleDbService = require('../../infra/db/mongo/schema/article.schema');

const articleController = new Article({ articleDbService })

module.exports = {
  index: articleController.index.bind(articleController),
}