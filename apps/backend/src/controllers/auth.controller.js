import { signToken } from "../libs/signToken.js";
import { createUser } from "../services/user.service.js";
export const register = async (req, res, next) => {
	try {
		const newUser = await createUser(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
};

export const login = async (req, res, next) => {
	try {
		const user = req.user;
		const payload = { sub: user.id, fullname: user.fullname };
		const token = signToken(payload);
		res.cookie("token", token);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
