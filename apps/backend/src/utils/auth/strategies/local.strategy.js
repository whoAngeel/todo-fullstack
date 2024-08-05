import { badData, unauthorized } from "@hapi/boom";
import { Strategy } from "passport-local";
import { findByEmail } from "../../../services/user.service.js";
import { compare } from "bcrypt";
export const LocalStrategy = new Strategy(
	{
		usernameField: "email",
		passwordField: "password",
	},
	async (email, password, done) => {
		try {
			if (email === "" && password === "") done(badData(), false);
			const user = await findByEmail(email);
			if (!user) done(unauthorized(), false);
			const isMatch = await compare(password, user.password);
			if (!isMatch) done(unauthorized(), false);
			delete user.dataValues.password;
			done(null, user);
		} catch (error) {
			done(error, false);
		}
	}
);
