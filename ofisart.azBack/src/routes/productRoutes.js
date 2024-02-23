import { Router } from "express";
import { deleteProduct, getAllProducts, getByIdProducts, getProductsByCategory, postProduct, updateProductById } from "../controllers/productController.js";

export const ProductRouter = Router();
ProductRouter.get('/:categoryId', getProductsByCategory)
ProductRouter.get('/', getAllProducts)
ProductRouter.delete('/:id', deleteProduct)
ProductRouter.get('/id/:productId', getByIdProducts)
ProductRouter.post('/', postProduct)
ProductRouter.put('/:id', updateProductById)
