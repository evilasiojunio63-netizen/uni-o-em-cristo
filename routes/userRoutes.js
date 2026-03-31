import express from "express";
import { registerUser, likeUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/like", likeUser);

export default router;
