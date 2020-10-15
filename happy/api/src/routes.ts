import { Router } from 'express';
const routes = Router();

import OrphanagesController from './controllers/OrphanagesController';

routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;
