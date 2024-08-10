import React from "react";
import { useLoaderData } from "react-router-dom";
import { getProfile } from "../api/auth";
import Navbar from "../components/Navbar";

function Home() {
	return (
		<div>
			<Navbar />
			<h2 className="text-3xl font-bold">Home</h2>
		</div>
	);
}

export default Home;
