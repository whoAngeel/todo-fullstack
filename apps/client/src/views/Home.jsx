import React from "react";
import { useLoaderData } from "react-router-dom";
import { getProfile } from "../api/auth";

export async function loader() {
	const profile = await getProfile().then((res) => res.data);
	return { profile };
}

function Home() {
	const { profile } = useLoaderData();
	console.log(profile);
	return (
		<div>
			<h2 className="text-3xl font-bold">Home</h2>
		</div>
	);
}

export default Home;
