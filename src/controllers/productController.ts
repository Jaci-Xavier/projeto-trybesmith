import { Request, Response } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const newPorduct = req.body;

  const product = await productService.createProduct(newPorduct);

  return res.status(201).json(product);
};

export default {
  createProduct,
};
