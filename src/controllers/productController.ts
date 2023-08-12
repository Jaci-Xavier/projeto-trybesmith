import { Request, Response } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const newPorduct = req.body;

  const product = await productService.createProduct(newPorduct);

  return res.status(201).json(product);
};

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

export default {
  createProduct,
  getAll,
};
