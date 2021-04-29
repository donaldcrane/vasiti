import { Router } from "express";
import PostController from "../controllers/post";
import Authentication from "../middlewares/authenticate";
import parser from "../middlewares/uploads";

const router = Router();
const { verifyToken } = Authentication;
const {
  addPost, likedPost, getPostById, getPosts, deletePost, verifyPost
} = PostController;

router.get("/posts", getPosts);
router.get("/post/:id", getPostById);

router.post("/post", parser.single("media"), addPost);

router.patch("/like-post/:id", likedPost);
router.patch("/post/:id", verifyToken, verifyPost);

router.delete("/post/:id", verifyToken, deletePost);

export default router;