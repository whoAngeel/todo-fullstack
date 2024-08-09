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

	const login = (credentials) => {
		setLoading(true);
		return axios
			.post("/api/auth/login", credentials)
			.then((res) => {
				return res.data;
			})
			.finally(() => setLoading(false));
	};

	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
