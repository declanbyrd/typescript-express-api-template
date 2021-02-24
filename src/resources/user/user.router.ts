import { Router } from 'express';
import controller from './user.controller';

const router = Router();

router.get('/:id', controller.getOne);
router.delete('/:id', controller.removeOne);
router.post('/', controller.createOne);

export default router;
