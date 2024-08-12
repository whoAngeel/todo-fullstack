import React, { useEffect } from "react";
import Tasks from "../components/Tasks";
import { useTasks } from "../context/TasksContext";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import InputTask from "../components/forms/InputTask";
import { message } from "antd";
function Home() {
	const { getTasks } = useTasks();
	const token = Cookies.get("token");
	useEffect(() => {
		getTasks();
	}, []);
	const [contextHolder] = message.useMessage();
	return (
		<div className="mx-auto w-9/12 sm:w-9/12 md:w-5/12 lg:w-5/12 min-h-max py-3">
			<InputTask />
			<Tasks />
		</div>
	);
}

export default Home;
