require('dotenv').config();
import express, { type Request, type Response } from 'express';
import ordersRouter from './routes/orders/routes';
import orderRouter from './routes/order/routes';
import productsRouter from './routes/products/routes';
 
const app = express();
const PORT = process.env.PORT || 3000;

// export const DB_NAME = process.env.DB_NAME
// export const DB_HOST = process.env.DB_HOST
// export const DB_USER = process.env.DB_USER
// export const DB_PASSWORD = process.env.DB_PASSWORD
// export const DB_PORT = process.env.DB_PORT

app.use(express.json());

import cors from 'cors'
app.use( cors())

app.use('/order',orderRouter)
app.use('/orders', ordersRouter)
app.use('/products', productsRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
