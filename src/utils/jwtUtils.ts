import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'xablau';

type Payload = {
  id: number,
  username: string,
  vocation: string,
};

function generateToken(payload: Payload): string {
  return jwt.sign(payload, SECRET, { expiresIn: '10d' });
}

function verifyToken(token: string): Payload | string {
  const payload = jwt.verify(token, SECRET) as Payload;
  return payload;
}

export {
  generateToken,
  verifyToken,
};