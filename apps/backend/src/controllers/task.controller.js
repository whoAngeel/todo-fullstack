import { create, getAll } from "../services/task.service.js";

export const createTask = async (req, res, next) => {
	try {
		const userId = req.user.sub;
		const { title, description } = req.body;
		const task = await create({ title, description, user: userId });
		res.status(201).json(task);
	} catch (error) {
		next(error);
	}
};
export const getTask = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
export const getTasks = async (req, res, next) => {
	try {
        const userId = req.user.sub;
        const tasks = await getAll(userId);
        res.status(200).json(tasks);
	} catch (error) {
		next(error);
	}
};
export const updateTask = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
export const deleteTask = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
