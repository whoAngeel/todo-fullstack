import { Empty, Skeleton, Typography } from "antd";
import React from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "./TaskCard";
import Tab from "./Tab";

function Tasks() {
	const { tasks, isLoading, isInitialized, filteredTasks } = useTasks();

	if (!isInitialized || isLoading) {
		// if (true) {
		return (
			<div className="min-w-full flex flex-col gap-y-2 ">
				{/* <div className="skeleton w-full h-10 bg-cerise-red-100 rounded-lg"></div> */}
				<Skeleton.Input block active size="large" />
				<Skeleton.Input block active size="large" />
				<Skeleton.Input block active size="large" />
				<Skeleton.Input block active size="large" />
				{/* <div className="skeleton w-full h-10 bg-cerise-red-100 rounded-lg"></div> */}
				{/* <div className="skeleton w-full h-10 bg-cerise-red-100 rounded-lg"></div> */}
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
		<>
			<div className="min-w-full flex flex-col gap-y-2">
				{filteredTasks.map((task) => (
					<TaskCard task={task} key={task._id} />
				))}
			</div>
			<div>
				<Tab />
			</div>
		</>
	);
}

export default Tasks;
