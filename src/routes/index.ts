import * as express from 'express';
import { userRoutes } from './users.routes';

export const routes = express.Router();

routes.use(userRoutes);