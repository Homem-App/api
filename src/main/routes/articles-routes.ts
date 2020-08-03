import { Router } from 'express';
import { makeArticleController } from '../factories/article';
import { adaptRoute } from '../adapter/express-route.adapter';

export default (router: Router): void => {
  router.get('/article', adaptRoute(makeArticleController()));
};