import React from "react";

function TaskCard({ task }) {
	return (
		<div className="rounded-2xl bg-cerise-red-400 h-32 w-28 md:h-44 md:w-40 p-4">
			<h3 className="text-xl font-bold capitalize ">{task.title}</h3>
			<p className="mt-4 ">{task.description}</p>
		</div>
	);
}

export default TaskCard;
