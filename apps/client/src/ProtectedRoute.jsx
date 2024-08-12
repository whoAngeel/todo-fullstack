import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import Banner from "./components/Banner.jsx";
import MinimalNav from "./components/MinimalNav.jsx";
function ProtectedRoute({ children }) {
	const token = Cookies.get("token");
	const { getProfile } = useAuth();
	if (!token) return <Navigate to="/login" replace />;

	return (
		<div className="min-h-screen relative">
			<Banner />
			<div className="w-4/6 pt-8 mx-auto">
				<MinimalNav />
			</div>
			{/* <Navbar2 /> */}
			<div className="flex-1 relative ">{children}</div>
		</div>
	);
}

export default ProtectedRoute;
