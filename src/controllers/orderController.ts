import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await orderService.getAllOrders();
  
  res.status(200).json(allOrders);
};

export default {
  getAllOrders,
};