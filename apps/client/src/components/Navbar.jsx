import React from "react";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Navbar() {
	const { user, removeUser } = useAuth();
	const navigate = useNavigate();
	console.log(user);
	const avatarPlaceholderText = (text) => {
		let palabras = text.split(" ");
		let letras = palabras[0][0] + palabras[1][0];
		return letras;
	};
	const logout = () => {
		removeUser();
		Cookies.remove("token");
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
							<span>fs</span>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<div className="my-2 mx-auto">
							<div class="font-bold">{user.fullname}</div>
							<div class="text-sm opacity-50">{user.email}</div>
						</div>
						<li>
							<a className="justify-between">Perfíl</a>
						</li>

						<li>
							<a onClick={logout}>Cerrar sesión</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
