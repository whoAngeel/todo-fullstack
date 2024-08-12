import { createContext, useContext, useEffect, useState } from "react";
import { addTask, fetchTasks } from "../api/tasks";
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
				isInitialized,
				clearTasks,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};
