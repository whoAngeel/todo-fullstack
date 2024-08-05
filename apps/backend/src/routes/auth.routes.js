import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

const router = Router();

// router.post("/login", );

router.post("/register", register);

export default router;
