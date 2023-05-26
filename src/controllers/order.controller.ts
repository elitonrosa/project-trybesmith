import { Request, Response } from 'express';

import orderService from '../services/order.service';

async function list(_req: Request, res: Response): Promise<Response> {
  const { data } = await orderService.list();

  return res.status(200).json(data);
}

export default {
  list,
};