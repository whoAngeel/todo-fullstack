import { Router } from "express";
import AuthRouter from "./auth.routes.js";
export const routerAPI = (app) => {
	const router = Router();
	router.use("/auth", AuthRouter);
	app.use('/api', router);
};
