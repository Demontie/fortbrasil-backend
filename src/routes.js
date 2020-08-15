import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ShopController from './app/controllers/ShopController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', SessionController.store);

// Tudo que vier depois, irá ter uma validação de autenticação
routes.use(authMiddleware);

routes.get('/shops', ShopController.index);
routes.post('/shops', ShopController.store);
routes.put('/shops/:id', ShopController.update);
routes.delete('/shops/:id', ShopController.delete);
routes.put('/users', UserController.update);

export default routes;
