import { Controller } from "../../presentation/protocols";
import { ListArticle } from '../../presentation/controller/article/ListArticle';
import { articleSchema } from '../../infra/db/mongo/schema/article.schema';

export const makeArticleController = (): Controller => {
  const articleController = new ListArticle(articleSchema);
  return articleController;
}
