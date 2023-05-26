import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel,
} from '../database/models/product.model';
import { ProductWithoutOrderid } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import newProductValidations from './validations/productValidations';

async function create(
  newProduct: ProductInputtableTypes,
): Promise<ServiceResponse<ProductWithoutOrderid>> {
  let responseService: ServiceResponse<ProductWithoutOrderid>;

  const error = newProductValidations(newProduct);
  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }
  const {
    dataValues: { orderId, ...product },
  } = await ProductModel.create(newProduct);
  
  responseService = {
    status: 'SUCCESSFUL',
    data: product,
  };
  return responseService;
}

async function list(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
}

export default {
  create,
  list,
};
