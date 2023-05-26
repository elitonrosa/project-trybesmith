import express from 'express';

import productRouter from './routes/product.route';
import orderRouter from './routes/order.route';
import loginRouter from './routes/login.route';

const app = express();

app.use(express.json());

app.use(loginRouter);
app.use(productRouter);
app.use(orderRouter);

export default app;
