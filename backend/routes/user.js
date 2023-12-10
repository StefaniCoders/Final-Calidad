import { Router } from "express";
import UserController from "../controller/user.js";

const userRouter = Router();

userRouter.get("/get-img-perfil", UserController.getImgProfileUser);
userRouter.get("/get-data-user", UserController.getDataUser);
userRouter.get("/get-all-users", UserController.getAllUsers);

export default userRouter;
