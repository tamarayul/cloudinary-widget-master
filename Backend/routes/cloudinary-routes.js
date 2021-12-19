import express from 'express';

import { getPhotos, deleteAllPhotos } from '../controllers/cloudinary-controller.js';

const router = express.Router();

router.get('/', getPhotos);
router.get('/delete', deleteAllPhotos);

export default router;