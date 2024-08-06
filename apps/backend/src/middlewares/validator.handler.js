import { badRequest } from "@hapi/boom";
import { ZodError } from "zod";

export const validatorHandler = (schema, property) => {
	return (req, res, next) => {
		const data = req[property];
		const { error } = schema.validate(data, { abortEarly: false });
		if (error) {
			next(badRequest(error));
		}

		next();
	};
};

export const validateSchema = (schema) => (req, res, next) => {
	try {
	  schema.parse(req.body);
	  next();
	} catch (error) {
	  if (error instanceof ZodError) {
		// Formatear los errores de Zod en un formato más amigable
		const formattedErrors = error.issues.reduce((acc, issue) => {
		  const key = issue.path.join('.');
		  if (!acc[key]) {
			acc[key] = [];
		  }
		  acc[key].push(issue.message);
		  return acc;
		}, {});
  
		return res.status(400).json({ errors: formattedErrors });
	  }
  
	  // En caso de otros errores
	  next(error);
	}
  };