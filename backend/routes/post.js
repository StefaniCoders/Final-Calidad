import { Router } from "express";
import PostController from "../controller/post.js";
import { upload } from "../middleware/multer.js";

const postRouter = Router();

postRouter.post(
  "/crear-publicacion",
  upload.single("multimedia"),
  PostController.createPostWithMultimedia
);
postRouter.post("/postear", PostController.createPostWithOutMultimedia);
postRouter.get("/publicaciones", PostController.getPosts);

export default postRouter;
