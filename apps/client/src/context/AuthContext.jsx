import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { signin, signup } from "../api/auth";

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

	useEffect(() => {
		if (user) sessionStorage.setItem("user", JSON.stringify(user));
		else sessionStorage.removeItem("user");
	}, [user]);

	const getProfile = () => {
		axios
			.get("/api/auth/me", {
				headers: { Authorization: `Bearer ${Cookies.get("token")}` },
			})
			.then((res) => {
				console.log(res.data);
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
	return (
		<AuthContext.Provider value={{ user, getProfile, removeUser }}>
			{children}
		</AuthContext.Provider>
	);
};
