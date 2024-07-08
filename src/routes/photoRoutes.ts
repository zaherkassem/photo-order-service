import { Router } from 'express';
import { getRandomPhotos } from '../controllers/photoController';

const router = Router();

router.get('/:count', getRandomPhotos);

export default router;
