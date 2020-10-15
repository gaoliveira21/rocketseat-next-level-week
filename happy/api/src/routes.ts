import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const uploads = multer(uploadConfig);

routes.post('/orphanages', uploads.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;
