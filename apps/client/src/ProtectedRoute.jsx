import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar.jsx";
function ProtectedRoute({ children }) {
	const token = Cookies.get("token");
	if (!token) return <Navigate to="/login" replace />;
	return (
		<>
			<Navbar></Navbar>
			{children}
		</>
	);
}

export default ProtectedRoute;
