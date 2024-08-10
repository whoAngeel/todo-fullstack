import axios from "axios";
import Cookies from "js-cookie";

export const client = axios.create({ baseURL: "/api/" });
const token = Cookies.get("token");

export const signin = async (credentials) => {
	return await client.post("/auth/login", credentials);
};

export const signup = async (userValues) => {
	return await client.post("/auth/register", userValues);
};

export const fetchProfile = async () => {
	return await client.get("/auth/me", {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
};
