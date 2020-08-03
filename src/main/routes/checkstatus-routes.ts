import { Router } from 'express';
import { adaptRoute } from '../adapter/express-route.adapter';
import { CheckStatusController } from '../../presentation/controller/CheckStatus';

export default (router: Router): void => {
  const checkStatusController = new CheckStatusController();
  router.get('/checkstatus', adaptRoute(checkStatusController.index));
};