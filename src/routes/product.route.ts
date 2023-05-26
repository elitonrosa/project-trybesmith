import { Router } from 'express';

import validateNewProduct from '../middlewares/validateNewProduct';

import ProductController from '../controllers/product.controller';

const router = Router();

router.post('/products', validateNewProduct, ProductController.create);
router.get('/products', ProductController.list);

export default router;