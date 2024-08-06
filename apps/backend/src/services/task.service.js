import { notFound } from "@hapi/boom";
import taskModel from "../models/task.model.js";

export const create = async (taskData) => {
	const task = await taskModel.create(taskData);
	return task;
};

export const getAll = async (userId) => {
	return await taskModel.find({user: userId});
};

export const getById = async (id) => {
	const task = await taskModel.findById(id);
	if (!task) throw notFound("Tarea no encontrada");
	return task;
};

export const removeTask = async (id) => {
	const task = await taskModel.findByIdAndDelete(id);
	return task;
};

export const edit = async (id, taskData) => {
	const updatedTask = await taskModel.findByIdAndUpdate(id, taskData, {
		new: true,
	});
	return updatedTask;
};
