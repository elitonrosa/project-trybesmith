import express from 'express';

import productRouter from './routes/product.route';
import orderRouter from './routes/order.route';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(orderRouter);

export default app;
