import {
	create,
	edit,
	getAll,
	getById,
	removeTask,
	toggleStatus,
} from "../services/task.service.js";

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
		const userId = req.user.sub;
		const { id } = req.params;
		const task = await getById(userId, id);
		res.status(200).json(task);
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
export const editTask = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userId = req.user.sub;
		const task = await edit(id, req.body, userId);
		res.status(200).json(task);
	} catch (error) {
		next(error);
	}
};

export const changeStatus = async (req, res, next) => {
	try {
		const { id } = req.params;
		const rta = await toggleStatus(id);
		res.status(200).json(rta);
	} catch (error) {
		next(error);
	}
};
export const deleteTask = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userId = req.user.sub;
		const rta = await removeTask(id);
		res.status(200).send("Tarea eliminada con exito");
	} catch (error) {
		next(error);
	}
};
