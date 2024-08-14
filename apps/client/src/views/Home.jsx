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
		<div className="mx-auto w-10/12 sm:w-10/12 md:w-6/12 lg:w-6/12 min-h-max py-3">
			<InputTask />
			<Tasks />
		</div>
	);
}

export default Home;
