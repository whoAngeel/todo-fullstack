import axios from "axios";
import { header } from "express-validator";
import Cookies from "js-cookie";

export const client = axios.create({ baseURL: "/api/" });
const token = Cookies.get("token");

export const fetchTasks = async () =>
	client.get("/tasks", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

export const addTaskApi = async (task) =>
	client.post("/tasks", {
		data: task,
		headers: {
			Authorization: "Bearer " + token,
		},
	});

export const deleteTaskApi = async (taskId) =>
	client.delete(`/tasks/${taskId}`, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});

export const changeStatusTaskApi = async (taskId) =>
	client.patch(`/tasks/status/${taskId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
