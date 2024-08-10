import { signToken } from "../libs/signToken.js";
import { createUser, findById } from "../services/user.service.js";
export const register = async (req, res, next) => {
	try {
		const newUser = await createUser(req.body);
		const payload = { sub: newUser._id, fullname: newUser.fullname };
		const token = signToken(payload);
		res.status(201).json({
			token,
			user: { ...newUser, password: undefined },
		});
	} catch (error) {
		next(error);
	}
};

export const login = async (req, res, next) => {
	try {
		const user = req.user;
		const payload = { sub: user._id, fullname: user.fullname };
		const token = signToken(payload);
		res.status(200).json({ token });
	} catch (error) {
		next(error);
	}
};

export const myProfile = async (req, res, next) => {
	try {
		const id = req.user.sub;
		const user = await findById(id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
