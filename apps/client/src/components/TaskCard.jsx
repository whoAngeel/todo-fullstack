import { Button, Card, Checkbox, Popconfirm, Space } from "antd";
import React from "react";
import { useTasks } from "../context/TasksContext";
import { DeleteOutlined } from "@ant-design/icons";

function TaskCard({ task }) {
	const { removeTask } = useTasks();

	const handleConfirmDelete = (e) => {
		removeTask(task._id);
	};
	return (
		<div className="w-full bg-cerise-red-200 h-12 flex rounded-md  items-center">
			{/*  */}
			<div className="w-1/12 flex items-center  content-center justify-center mx-3">
				<input
					type="checkbox"
					className="checkbox  checkbox-xs checkbox-secondary  sm:checkbox-xs  md:checkbox-md lg:checkbox-lg"
				/>
			</div>

			<div className="w-10/12 ">
				<h3 className="text-sm sm:text-sm font-semibold capitalize ">
					{task.title}
				</h3>
			</div>

			<div className="w-1/12 flex items-center justify-end">
				<Popconfirm
					title="Eliminar la  tarea"
					description="¿Estas seguro de eliminar esta tarea?"
					onConfirm={handleConfirmDelete}
					okText="Si"
					cancelText="No"
				>
					{/* <Button danger type="dashed">
					<DeleteOutlined />
				</Button> */}
					<button className="btn btn-sm btn-ghost ">
						<DeleteOutlined />
					</button>
				</Popconfirm>
			</div>
		</div>
	);
}

export default TaskCard;
