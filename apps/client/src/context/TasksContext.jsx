import { createContext, useContext, useEffect, useState } from "react";
import { addTaskApi, changeStatusTaskApi, deleteTaskApi } from "../api/tasks";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const TaskContext = createContext();
export const useTasks = () => {
	const context = useContext(TaskContext);
	if (!context) throw new Error("useTasks must be used within an TaskProvider");
	return context;
};
export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);
	const [messageApi] = message.useMessage();

	const getTasks = () => {
		setIsLoading(true);
		axios
			.get("/api/tasks", {
				headers: { Authorization: `Bearer ${Cookies.get("token")}` },
			})
			.then((res) => {
				console.log(res.data);
				setTasks(res.data);
			})
			.catch((err) => {
				toast.error(err.response.data.message);
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
				setIsInitialized(true);
			});
	};

	const addTask = (values) => {
		setIsLoading(true);
		addTaskApi(values)
			.then((res) => {
				console.log(res.data);
				setTasks([...tasks, res.data]);
			})
			.catch((err) => {
				console.log(err);
				messageApi.open({
					type: "error",
					content: `Elimninando la tarea ${id}`,
				});
			})
			.finally(() => setIsLoading.false);
	};

	const removeTask = (taskId) => {
		deleteTaskApi(taskId)
			.then((res) => {
				console.log("Tarea borrada en el backend", res.data);
				setTasks(tasks.filter((t) => t._id !== taskId));
			})
			.catch((err) => {
				console.log(err);
				toast.error("No se ha podido eliminar la tarea");
			});
	};

	const toggleTaskstatus = (taskId) => {
		// const newStatus = currentStatus === "pending" ? "done" : "pending";
		axios
			.patch(
				`/api/tasks/status/${taskId}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${Cookies.get("token")}`,
					},
				}
			)
			.then((res) => {
				console.log(res.data);
				setTasks((prevTasks) =>
					prevTasks.map((task) =>
						task._id === taskId
							? {
									...task,
									status: task.status === "todo" ? "done" : "todo",
								}
							: task
					)
				);
			})
			.catch((err) => {
				console.log(err.response);
				toast.error("Error al actualizar el estado");
			});
	};
	const pushTask = (task) => {
		setIsLoading(true);
		addTask(task)
			.then((res) => {
				console.log(res.data);
				setTasks([...tasks, res.data]);
			})
			.catch((err) => {
				toast.error(err.message);
				console.log(err);
			})
			.finally(() => setIsLoading(false));
	};

	const clearTasks = () => {
		setTasks([]);
		setIsInitialized(false);
		console.log("tasks cleared", tasks.length);
	};

	return (
		<TaskContext.Provider
			value={{
				tasks,
				isLoading,
				getTasks,
				pushTask,
				removeTask,
				isInitialized,
				setTasks,
				clearTasks,
				addTask,
				toggleTaskstatus,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};
