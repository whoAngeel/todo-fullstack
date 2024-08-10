import React from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import Tasks from "../components/Tasks";

function Home() {
	return (
		<div className="w-screen ">
			{/* <Navbar/> */}
			<Tasks />
		</div>
	);
}

export default Home;
