import express from "express";
import authController from "../../controller/auth-controller.js";
import authenticate from "../../middlewars/authenticate.js";

const authRouter = express.Router();

authRouter.post('/users/register', authController.signup );

authRouter.post('/users/login', authController.signin);

authRouter.get('/current', authenticate, authController.getCurrent);

export default authRouter;