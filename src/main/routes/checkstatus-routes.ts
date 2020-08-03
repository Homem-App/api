import { Router } from 'express';
import { CheckStatusController } from '../../presentation/controller/CheckStatus';
import { adaptRoute } from '../adapter/express-route.adapter';

export default (router: Router): void => {
  const checkStatusController = new CheckStatusController();
  router.get('/checkstatus', adaptRoute(checkStatusController));
};