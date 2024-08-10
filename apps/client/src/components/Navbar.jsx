import React from "react";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Navbar() {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const user = JSON.parse(sessionStorage.getItem("user"));
	console.log(user);

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
	const logoutHandler = () => {
		logout();
		navigate("/login");
	};
	return (
		<div className="navbar bg-cerise-red-50">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">TODO App</a>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<div className="avatar placeholder">
						<div
							tabIndex={0}
							role="button"
							className="bg-neutral text-neutral-content w-12 rounded-full"
						>
							<span>{getAvatarPlaceholder(user?.fullname)}</span>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<div className="my-2 mx-auto">
							<div className="font-bold">{user?.fullname}</div>
							<div className="text-sm opacity-50">{user?.email}</div>
						</div>
						<li>
							<a className="justify-between">Perfíl</a>
						</li>

						<li>
							<a onClick={logoutHandler}>Cerrar sesión</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
