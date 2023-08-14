import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderIds } from '../types/Order';

const getAllOrders = async (): Promise<OrderIds[]> => {
  const allOrders = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  const allOrdersArray = allOrders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((item) => item.id),
  }));

  return allOrdersArray;
};

export default {
  getAllOrders,
};
