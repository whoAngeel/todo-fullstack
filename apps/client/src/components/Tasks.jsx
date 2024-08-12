import { Empty, Typography } from "antd";
import React from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "./TaskCard";

function Tasks() {
	const { tasks, isLoading, isInitialized } = useTasks();

	if (!isInitialized || isLoading) {
		return (
			<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
				<div className="skeleton h-32 w-28 md:h-44 md:w-40"></div>
				<div className="skeleton h-32 w-28 md:h-44 md:w-40"></div>
				<div className="skeleton h-32 w-28 md:h-44 md:w-40"></div>
			</div>
		);
	}

	if (!tasks || tasks.length === 0) {
		return (
			<div className="mt-2">
				<Empty
					imageStyle={{ height: 100 }}
					description={
						<Typography className="font-semibold text-xl text-cerise-red-950 mt-4">
							No se encontraron tareas
						</Typography>
					}
				/>
			</div>
		);
	}
	return (
		<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
			{tasks.map((task) => (
				<TaskCard task={task} key={task._id} />
			))}
		</div>
	);
}

export default Tasks;
