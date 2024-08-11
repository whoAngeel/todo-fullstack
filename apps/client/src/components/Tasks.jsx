import { Empty } from "antd";
import React from "react";
import { useTasks } from "../context/TasksContext";

function Tasks() {
	const { tasks, isLoading, isInitialized } = useTasks();

	if (!isInitialized) {
		return (
			<div>
				<div className="skeleton h-32 w-32"></div>
				<div className="skeleton h-32 w-32"></div>
			</div>
		);
	}
	if (isLoading) {
		return (
			<div>
				<div className="skeleton h-32 w-32"></div>
				<div className="skeleton h-32 w-32"></div>
			</div>
		);
	}

	if (tasks.length === 0) {
		return (
			<div>
				<Empty />
			</div>
		);
	}
	return (
		<div className="task-list">
			{tasks.map((task) => (
				<div key={task._id} className="task-card">
					<h3>{task.title}</h3>
					<p>{task.description}</p>
				</div>
			))}
		</div>
	);
}

export default Tasks;
