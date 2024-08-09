import { createContext, useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("Use Auth must be used within an AuthProvider");
	return context;
};

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);

	const register = (userData) => {
		setLoading(true);
		axios
			.post("/api/auth/register", userData)
			.then((res) => {
				// console.log(res.data);
				console.log(res.data);
				Cookies.set("token", res.data.token);
				setUser(res.data.user);
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			})
			.finally(() => setLoading(false));
	};

	return (
		<AuthContext.Provider value={{ user, register, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
