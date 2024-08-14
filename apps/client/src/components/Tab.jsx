import { Segmented } from "antd";
import React, { Children } from "react";
import { useTasks } from "../context/TasksContext";

function Tab() {
	const { changeFilter, filteredTasks } = useTasks();

	return (
		<div className="w-full flex h-16 mt-6 p-2 bg-cerise-red-50 rounded-md items-center justify-between">
			<div className="w-3/12  flex items-center justify-center">
				<span className="font-semibold">{filteredTasks.length} items</span>
			</div>
			<div className="w-7/12 join ">
				<span
					className="btn btn-ghost btn-xs lg:btn-sm sm:btn-sm join-item"
					onClick={() => changeFilter("all")}
				>
					Todas
				</span>
				<span
					className="btn btn-ghost btn-xs lg:btn-sm sm:btn-sm join-item"
					onClick={() => changeFilter("completed")}
				>
					Completadas
				</span>
				<span
					className="btn btn-ghost btn-xs lg:btn-sm sm:btn-sm join-item	"
					onClick={() => changeFilter("pending")}
				>
					Pendientes
				</span>
			</div>
			<div className="w-3/12">
				<button className="btn btn-ghost btn-sm text-xs">
					Limpiar completadas
				</button>
			</div>
		</div>
	);
}

export default Tab;
