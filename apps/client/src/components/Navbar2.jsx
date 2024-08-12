import React from "react";
import defaultBanner from "/public/banners/banner3.jpg";
import { Avatar, Dropdown, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TasksContext";
function Navbar2() {
	const [banner, setBanner] = React.useState();
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
		<div
			className="w-full h-56 bg-cover bg-center brightness-75 fixed top-0 left-0"
			style={{ backgroundImage: `url(${defaultBanner})` }}
		>
			<div className="h-full w-full bg-cerise-red-300/50 ">
				<div className="mx-auto w-4/5 pt-10   "></div>
			</div>
		</div>
	);
}

export default Navbar2;
