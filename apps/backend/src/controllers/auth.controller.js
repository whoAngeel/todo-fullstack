import { createUser } from "../services/user.service.js";
export const register = async (req, res, next) => {
	try {
		const newUser = await createUser(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
};
