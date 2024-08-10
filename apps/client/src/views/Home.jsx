import React from "react";
import { getProfile } from "../api/auth";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";

function Home() {
	return <div className="w-screen"></div>;
}

export default Home;
