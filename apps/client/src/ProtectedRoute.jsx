import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar.jsx";
function ProtectedRoute({ children }) {
	const token = Cookies.get("token");
	const { getProfile } = useAuth();
	if (!token) return <Navigate to="/login" replace />;

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar></Navbar>
			<div className="flex-grow bg-cerise-red-300 pt-8">{children}</div>
		</div>
	);
}

export default ProtectedRoute;
