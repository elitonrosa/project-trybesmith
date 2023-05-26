import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ProductService from '../services/product.service';

async function create(req: Request, res: Response): Promise<Response> {
  const { data, status } = await ProductService.create(req.body);

  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  return res.status(201).json(data);
}

async function list(_req: Request, res: Response): Promise<Response> {
  const { data } = await ProductService.list();

  return res.status(200).json(data);
}

export default {
  create,
  list,
};
