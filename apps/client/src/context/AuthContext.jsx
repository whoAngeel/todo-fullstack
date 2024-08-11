import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { fetchProfile, signin, signup } from "../api/auth";
import { useTasks } from "./TasksContext";

export const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("Use Auth must be used within an AuthProvider");
	return context;
};

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(() => {
		const savedUser = sessionStorage.getItem("user");
		return savedUser ? JSON.parse(savedUser) : null;
	});

	// useEffect(() => {
	// 	if (user) sessionStorage.setItem("user", JSON.stringify(user));
	// 	else sessionStorage.removeItem("user");
	// }, [user]);

	const getProfile = () => {
		fetchProfile()
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => {
				toast.error("Error obteniendo la informacion del usuario");
			});
	};
	const removeUser = () => {
		sessionStorage.removeItem("user");
		setUser(null);
	};

	const logout = () => {
		removeUser();
		Cookies.remove("token");
	};
	return (
		<AuthContext.Provider
			value={{ user, setUser, getProfile, removeUser, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
