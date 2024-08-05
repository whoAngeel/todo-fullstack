import { Strategy, ExtractJwt } from "passport-jwt";
import { config } from "../../../config.js";
export const JwtStrategy = new Strategy(
	{
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: config.secret,
	},
	(payload, done) => {
		return done(null, payload);
	}
);
