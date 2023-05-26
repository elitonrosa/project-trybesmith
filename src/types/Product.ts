export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

export type ProductWithoutOrderid = Omit<Product, 'orderId'>;
