import express from 'express';

import orderController from '../controllers/orderController';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAllOrders);

export default orderRouter;