import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: Array<Product>;
  productIds?: Array<{ id: number }>;
};

export type OrderIds = {
  id: number;
  userId: number;
  productIds?: Array<number>;
};
