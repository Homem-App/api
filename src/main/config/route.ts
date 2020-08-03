import { Router, Express } from 'express';
import fg from 'fast-glob';

export const setupRoute = (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  fg.sync('**/src/main/routes/**routes.ts')
    .map(async (routeFile) => {
      const route = (await import(`../../../${routeFile}`)).default;
      route(router);
    })
}