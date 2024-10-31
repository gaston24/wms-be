import { Router } from 'express';
import articleController from '../controllers/article.controller';

const router = Router();

router.post('/', articleController.create);
router.get('/', articleController.findAll);
router.get('/:id', articleController.findById);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.delete);

export default router;
