import bcrypt from 'bcryptjs';

import UserModel from '../database/models/user.model';

import { Login, LoginToken } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';

import { generateToken } from '../utils/jwtUtils';

async function login(userLogin: Login): Promise<ServiceResponse<LoginToken>> {
  const user = await UserModel.findOne({
    where: { username: userLogin.username },
  });

  if (
    !user
    || !bcrypt.compareSync(userLogin.password, user.dataValues.password)
  ) {
    return {
      status: 'INVALID_USER',
      data: { message: 'Username or password invalid' },
    };
  }
  
  const { password, ...userWhithoutPassword } = user.dataValues;
  const token = generateToken(userWhithoutPassword);

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  login,
};
