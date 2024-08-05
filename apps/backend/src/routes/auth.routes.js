import { Router } from "express";
import { login, myProfile, register } from "../controllers/auth.controller.js";
import passport from "passport";

const router = Router();

router.post("/login", passport.authenticate('local', { session: false }), login );

router.post("/register", register);

router.get("/me",passport.authenticate('jwt', { session: false }), myProfile)

export default router;
