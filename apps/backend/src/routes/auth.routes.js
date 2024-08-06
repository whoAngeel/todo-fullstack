import { Router } from "express";
import { login, myProfile, register } from "../controllers/auth.controller.js";
import passport from "passport";
import { validateSchema } from "../middlewares/validator.handler.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post(
	"/login",
	validateSchema(loginSchema),
	passport.authenticate("local", { session: false }),
	login
);

router.post("/register", validateSchema(registerSchema), register);

router.get("/me", passport.authenticate("jwt", { session: false }), myProfile);

export default router;
