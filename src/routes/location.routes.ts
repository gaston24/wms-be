import { Router } from 'express';
import locationController from '../controllers/location.controller';

const router = Router();

router.post('/', locationController.create);
router.get('/', locationController.findAll);
router.get('/:id', locationController.findById);
router.put('/:id', locationController.update);
router.delete('/:id', locationController.delete);

export default router;
