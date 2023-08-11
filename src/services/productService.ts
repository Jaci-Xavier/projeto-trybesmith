import productModel from '../database/models/product.model';

const createProduct = async (inputData) => {
  const product = await productModel.create(inputData)

  return product;
}

export default {
  createProduct,
}