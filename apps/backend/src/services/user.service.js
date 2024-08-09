import { conflict, notFound } from "@hapi/boom";
import User from "../models/user.model.js";
import { hash } from "bcrypt";

export const createUser = async (userData) => {
	const user = await User.findOne({ email: userData.email });
	if (user) throw conflict("El usuario con el email ya existe");
	const newUser = await User.create({
		...userData,
		password: await hash(userData.password, 10),
	});
	return newUser;
};

export const findByEmail = async (email) => {
	const usuario = await User.findOne({ email });
	if (!usuario) throw notFound("Usuario no encontrado");
	return usuario;
};

export const findById = async (id) => {
	const user = await User.findById(id);
	if (!user) throw notFound("Usuario no encontrado");
	const userObj = user.toObject();
	delete userObj.password;
	return userObj;
};
