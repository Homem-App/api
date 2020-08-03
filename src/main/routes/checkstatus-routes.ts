import { Router } from 'express';
import { CheckStatusController } from '../../presentation/controller/CheckStatus';

export default (router: Router): void => {
  const checkStatusController = new CheckStatusController();
  router.get('/checkstatus', checkStatusController.index);
};