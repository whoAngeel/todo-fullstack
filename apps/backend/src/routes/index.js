import { Router } from "express";
import AuthRouter from "./auth.routes.js";
import TaskRouter from "./task.routes.js";
export const routerAPI = (app) => {
	const router = Router();
	router.use("/auth", AuthRouter);
	router.use('/tasks', TaskRouter);
	app.use('/api', router);
};
