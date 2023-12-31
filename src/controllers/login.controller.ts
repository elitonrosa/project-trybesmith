import { Request, Response } from 'express';

import loginService from '../services/login.service';

import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const user = req.body;
  if (!user || !user.username || !user.password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  
  const { data, status } = await loginService.login(req.body);

  if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);

  return res.status(200).json(data);
}

export default {
  login,
};