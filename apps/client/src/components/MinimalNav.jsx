import { Avatar, Dropdown, Typography } from "antd";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TasksContext";
import { Link, useNavigate } from "react-router-dom";

function MinimalNav() {
	const { logout } = useAuth();
	const { clearTasks } = useTasks();
	const navigate = useNavigate();
	const user = JSON.parse(sessionStorage.getItem("user"));
	const logoutHandler = () => {
		clearTasks();
		logout();
		navigate("/login");
	};
	const items = [
		{
			label: (
				<div className="my-2 mx-auto">
					<div className="font-bold">{user?.fullname}</div>
					<div className="text-sm opacity-50">{user?.email}</div>
				</div>
			),
			key: 0,
		},
		{
			type: "divider",
		},
		{
			label: <Link>Perfil</Link>,
			key: 1,
		},
		{
			label: <Link onClick={logoutHandler}>Cerrar sesión</Link>,
			key: 2,
		},
	];

	const getAvatarPlaceholder = (fullname) => {
		if (!fullname) return "?";

		const names = fullname.trim().split(/\s+/);
		const initials =
			names.length === 1
				? names[0][0].toUpperCase()
				: names
						.filter(
							(_, index) => index === 0 || index === names.length - 1
						)
						.map((name) => name[0].toUpperCase())
						.join("");
		return initials;
	};
	return (
		<div className="w-full flex justify-between items-center brightness-100">
			<Typography className="text-2xl font-extrabold text-cerise-red-50 ">
				Task Manager
			</Typography>

			<Dropdown menu={{ items }}>
				<Avatar
					size={{
						xs: 24,
						sm: 32,
						md: 40,
						lg: 64,
						xl: 80,
						xxl: 100,
					}}
				>
					{getAvatarPlaceholder(user.fullname)}
				</Avatar>
			</Dropdown>
		</div>
	);
}

export default MinimalNav;
