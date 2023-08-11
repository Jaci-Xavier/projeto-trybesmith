import productService from '../services/productService';
import { Request, Response } from "express";


const createProduct = async (req: Request, res: Response) => {
  
  const product = await productService.createProduct(req.body);

  return res.status(201).json(product);
};






export default {
    createProduct
}