import { createContext, useContext, useEffect, useState } from "react";
import { addTask, deleteTaskApi, fetchTasks } from "../api/tasks";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

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

	const removeTask = (taskId) => {
		// setIsLoading(true);
		// const task = ;
		// setTasks(tasks.filter((t) => t._id !== taskId));
		deleteTaskApi(taskId)
			.then((res) => {
				console.log("Tarea borrada en el backend", res.data);
				setTasks(tasks.filter((t) => t._id !== taskId));
			})
			.catch((err) => {
				console.log(err);
				toast.error("No se ha podido eliminar la tarea");
			});
		// .finally(() => setIsLoading(false));
		// setTasks(tasks.filter((task) => taskId !== task, _id));
		// deleteTaskApi(taskId).then((res) => {
		// });
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
				clearTasks,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};
