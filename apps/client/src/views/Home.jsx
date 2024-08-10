import React from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { getProfile } from "../api/auth";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";

function Home() {
	const token = Cookies.get("token");
	if (!token) return <Navigate to="/login" replace />;

	return (
		<div>
			<Navbar />
			<h2 className="text-3xl font-bold">Home</h2>
		</div>
	);
}

export default Home;
