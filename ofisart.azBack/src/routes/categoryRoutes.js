import { Router } from 'express';
import { getCategory, postCategory } from '../controllers/categoryController.js';
export const CategoryRouter = Router();

CategoryRouter.get('/', getCategory)
CategoryRouter.post('/', postCategory)