import express from 'express';
import { setupMiddlewares } from './middlewares';
import { setupRoute } from './route';

const app = express();
setupMiddlewares(app);
setupRoute(app);

export default app;