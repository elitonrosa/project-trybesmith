import { ProductInputtableTypes } from '../../database/models/product.model';

export default function newProductValidations(newProduct: ProductInputtableTypes): string | null {
  if (!newProduct.name) return 'Product name is required';
  if (!newProduct.price) return 'Product price is required';
  if (!newProduct.orderId) return 'Product orderId is required';

  return null;
}
