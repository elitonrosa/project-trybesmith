import ProductModel from '../database/models/product.model';

import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';

import { ServiceResponse } from '../types/ServiceResponse';

async function list(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const adjustedOrders = orders.map(({ dataValues }) => ({
    ...dataValues,
    productIds: dataValues.productIds?.map(({ id }) => id),
  })) as unknown as OrderSequelizeModel[];

  return { status: 'SUCCESSFUL', data: adjustedOrders };
}

export default {
  list,
};
