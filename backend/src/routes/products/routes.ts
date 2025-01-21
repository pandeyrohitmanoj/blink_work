import express from "express";
import { getProducts } from "./controller";

const productsRouter = express.Router()

productsRouter.get('/', getProducts )

export default productsRouter
