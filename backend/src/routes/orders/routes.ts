import express from "express";
import { addOrder, deleteOrder, updateOrder, } from "./controller";

const ordersRouter = express.Router()

ordersRouter.post('/', addOrder )
ordersRouter.put('/:id',updateOrder)
ordersRouter.delete('/:id', deleteOrder  )

export default ordersRouter
