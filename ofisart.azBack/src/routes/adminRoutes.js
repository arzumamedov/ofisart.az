import { Router } from 'express';
import {  loginController, signupController } from '../controllers/adminController.js';
export const AdminRouter = Router();

AdminRouter.post('/login',loginController)
AdminRouter.post('/signup',signupController)