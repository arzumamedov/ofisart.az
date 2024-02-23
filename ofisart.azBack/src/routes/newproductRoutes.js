import { Router } from "express";
import { getAllProjects, getByIdProject, postProject } from "../controllers/projectController.js";
import { getAllNewProducts, getByIdNewProduct, postNewProduct } from "../controllers/newprojectController.js";

export const NewProductRouter = Router();
// NewProductRouter.get('/:projectId', getProjectsByCategory )
NewProductRouter.get('/', getAllNewProducts)
// NewProductRouter.delete('/:id', deleteProject )
NewProductRouter.get('/id/:projectId', getByIdNewProduct)
NewProductRouter.post('/', postNewProduct)