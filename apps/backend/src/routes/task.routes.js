import { Router } from "express";
import {
	createTask,
	deleteTask,
	editTask,
	getTask,
	getTasks,
	changeStatus,
} from "../controllers/task.controller.js";
import passport from "passport";
import { validateSchema } from "../middlewares/validator.handler.js";
import {
	taskSchema,
	taskIdSchema,
	updateTaskSchema,
} from "../schemas/task.schema.js";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getTasks);
router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validateSchema(taskIdSchema, "params"),
	getTask
);
router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	validateSchema(taskSchema),
	createTask
);
router.patch(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validateSchema(taskIdSchema, "params"),
	validateSchema(updateTaskSchema),
	editTask
);

router.patch(
	"/status/:id",
	passport.authenticate("jwt", { session: false }),
	validateSchema(taskIdSchema, "params"),
	changeStatus
);
router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validateSchema(taskIdSchema, "params"),
	deleteTask
);

export default router;
