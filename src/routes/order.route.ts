import { Router } from 'express';

import orderController from '../controllers/order.controller';

const router = Router();

router.get('/orders', orderController.list);

export default router;