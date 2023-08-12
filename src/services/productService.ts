import productModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async (inputData: Product): Promise<ProductSequelizeModel> => {
  const product = await productModel.create(inputData);

  return product;
};

const getAll = async (): Promise<ProductSequelizeModel[]> => {
  const products = await productModel.findAll();
  return products;
};

export default {
  createProduct,
  getAll,
};