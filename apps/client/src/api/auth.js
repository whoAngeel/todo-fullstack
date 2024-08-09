import axios from "axios";

export const client = axios.create({ baseURL: "/api/" });

export const signin = async (credentials) => {
	return await client.post("/auth/login", credentials);
};

export const signup = async (userValues) => {
	return await client.post("/auth/register", userValues);
};
