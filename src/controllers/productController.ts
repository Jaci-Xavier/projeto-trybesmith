import productService from '../services/productService';
import { Request, Response } from "express";


const createProduct = async (req: Request, res: Response): Promise<Object | Response> => {
  const newPorduct = req.body;

  const product = await productService.createProduct(newPorduct);

  return res.status(201).json(product);
};


export default {
    createProduct
}