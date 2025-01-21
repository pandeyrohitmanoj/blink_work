import express from "express";
import { getAllOrders, getAllOrdersProduct, getOrder, getOrders,  } from "./controller";

const orderRouter = express.Router()

orderRouter.get('/', getAllOrders )
orderRouter.get('/orders', getOrders )
// orderRouter.get('/order_product', getAllOrdersProduct )
orderRouter.get('/:id', getOrder)



export default orderRouter
