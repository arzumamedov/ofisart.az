import { Router } from "express";
import { getAllProjects, getByIdProject, postProject } from "../controllers/projectController.js";

export const    ProjectRouter = Router();
// ProjectRouter.get('/:projectId', getProjectsByCategory )
ProjectRouter.get('/', getAllProjects )
// ProjectRouter.delete('/:id', deleteProject )
ProjectRouter.get('/id/:projectId', getByIdProject )
ProjectRouter.post('/', postProject)