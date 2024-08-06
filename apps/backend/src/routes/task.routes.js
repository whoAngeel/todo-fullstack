import { Router } from "express";
import { createTask, getTask, getTasks } from "../controllers/task.controller.js";
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getTasks);
router.get("/:id", passport.authenticate("jwt", { session: false }));
router.post("/", passport.authenticate("jwt", { session: false }), createTask);
router.patch("/:id", passport.authenticate("jwt", { session: false }));
router.delete("/:id", passport.authenticate("jwt", { session: false }));

export default router;
