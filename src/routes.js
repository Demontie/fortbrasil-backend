import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', SessionController.store);

// Tudo que vier depois, irá ter uma validação de autenticação
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
