const express = require('express');
const router = express.Router();

import productController from '../controllers/productController';

router.post('/', productController.createProduct);

export default router;