import { createContext, useContext, useState } from "react";
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
	const [user, setUser] = useState(null);

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

	return (
		<AuthContext.Provider value={{ user, getProfile }}>
			{children}
		</AuthContext.Provider>
	);
};
