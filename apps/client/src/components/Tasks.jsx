import { Empty } from "antd";
import React from "react";
import { useTasks } from "../context/TasksContext";

function Tasks() {
	const { tasks } = useTasks();
	if (tasks.length === 0) return <Empty />;

	return (
		<div className="w-full">
			<div className="mx-auto">
				{tasks.map((task) => (
					<p key={task._id}>{task.title}</p>
				))}
			</div>
		</div>
	);
}

export default Tasks;
