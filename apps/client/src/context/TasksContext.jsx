import { createContext, useContext, useEffect, useState } from "react";
import { addTask, fetchTasks } from "../api/tasks";
import { toast } from "react-toastify";

const TaskContext = createContext();
export const useTasks = () => {
	const context = useContext(TaskContext);
	if (!context) throw new Error("useTasks must be used within an TaskProvider");
	return context;
};
export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getTasks();
	}, []);
	const getTasks = () => {
		setIsLoading(true);
		fetchTasks()
			.then((res) => {
				console.log(res.data);
				setTasks(res.data);
			})
			.catch((err) => {
				toast.error(err.response.data.message);
				console.log(err);
			})
			.finally(() => setIsLoading(false));
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

	return (
		<TaskContext.Provider value={{ tasks, isLoading, getTasks, pushTask }}>
			{children}
		</TaskContext.Provider>
	);
};
