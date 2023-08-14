import express from 'express';

import productController from '../controllers/productController';
import nameVerify from '../middlewares/nameVerify';
import priceVerify from '../middlewares/priceVerify';

const router = express.Router();

router.post('/', nameVerify, priceVerify, productController.createProduct);

router.get('/', productController.getAll);

export default router;