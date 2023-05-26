import { NextFunction, Request, Response } from 'express';

export default async function validateNewProduct(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: 'Data is required' });
  }

  return next();
}
