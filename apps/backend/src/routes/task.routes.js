import { Router } from "express";
import { createTask, editTask, getTask, getTasks } from "../controllers/task.controller.js";
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getTasks);
router.get("/:id", passport.authenticate("jwt", { session: false }), getTask);
router.post("/", passport.authenticate("jwt", { session: false }), createTask);
router.patch("/:id", passport.authenticate("jwt", { session: false }), editTask);
router.delete("/:id", passport.authenticate("jwt", { session: false }));

export default router;
