import { Router } from 'express';
import controller from './item.controller';

const router = Router();

//  /api/item

router.get('/', controller.getMany);
router.post('/', controller.createOne);

router.get('/:id', controller.getOne);
router.put('/:id', controller.updateOne);
router.delete('/:id', controller.removeOne);

export default router;
