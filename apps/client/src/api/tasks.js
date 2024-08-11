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

export const addTask = async (task) =>
	client.post("/tasks", {
		data: task,
		headers: {
			Authorization: "Bearer " + token,
		},
	});
