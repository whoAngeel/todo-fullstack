import React, { useEffect } from "react";
import Tasks from "../components/Tasks";
import { useTasks } from "../context/TasksContext";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
function Home() {
	const { getTasks } = useTasks();
	const token = Cookies.get("token");
	useEffect(() => {
		getTasks();
	}, []);
	return (
		<div className="mx-auto w-1/2 min-h-max py-10">
			<Tasks />
		</div>
	);
}

export default Home;
