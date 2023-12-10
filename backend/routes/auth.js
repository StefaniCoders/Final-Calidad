import { Router } from "express";
import AuthController from "../controller/auth.js";

const authRouter = Router();

authRouter.post("/registrarse", AuthController.register);
authRouter.post("/iniciar-sesion", AuthController.login);

export default authRouter;
