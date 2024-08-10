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
		<div className="navbar bg-base-100">
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
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>

						<li>
							<a onClick={logout}>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
