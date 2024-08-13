import { notFound, unauthorized } from "@hapi/boom";
import taskModel from "../models/task.model.js";

export const create = async (taskData) => {
	const task = await taskModel.create(taskData);
	return task;
};

export const getAll = async (userId) => {
	return await taskModel.find({ user: userId });
};

export const getById = async (userId, id) => {
	const task = await taskModel.findById(id);
	if (task.user != userId) throw unauthorized("No autorizado");
	if (!task) throw notFound("Tarea no encontrada");
	return task;
};

export const removeTask = async (id) => {
	const task = await taskModel.findById(id);
	if (!task) throw notFound("Tarea no encontrada");
	const rta = await task.deleteOne();
	return rta;
};

export const edit = async (id, taskData, userId) => {
	const task = await taskModel.findOneAndUpdate(
		{ _id: id, user: userId },
		taskData,
		{
			new: true,
		}
	);
	return task;
};

export const toggleStatus = async (id) => {
	const task = await taskModel.findById(id);
	if (!task) throw notFound("Tarea no encontrada");
	task.status = task.status === "todo" ? "done" : "todo";
	await task.save();
	return task;
};
