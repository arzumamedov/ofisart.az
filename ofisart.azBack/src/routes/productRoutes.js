import { Router } from "express";
import { getAllProducts, getByIdProducts, getProductsByCategory, postProduct } from "../controllers/productController.js";

export const ProductRouter = Router();
ProductRouter.get('/:categoryId', getProductsByCategory )
ProductRouter.get('/', getAllProducts )
ProductRouter.get('/id/:productId', getByIdProducts )
ProductRouter.post('/', postProduct)