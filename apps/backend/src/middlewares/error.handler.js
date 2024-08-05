export const mongooseErrorHandler = (err, req, res, next) => {
	if (err.name === "ValidationError") {
		return res.status(400).json({
			error: "Validation Error",
			message: err.message,
			details: err.errors,
		});
	}
	if (err.code && err.code === 11000) {
		return res
			.status(409)
			.json({ error: "Conflict Error", message: err.message });
	}
	next(err);
};

export const logErrors = (err, req, res, next) => {
	console.log("ERROR_LOG", err.message);
	next(err);
};

export const errorHandler = (err, req, res, next) => {
	console.log(err.message);
	res.status(500).json({ message: err.message, stack: err.stack });
};

export const boomErrorHandler = (err, req, res, next) => {
	if (err.isBoom) {
		const { output } = err;
		res.status(output.statusCode).json(output.payload);
        next()
	} else {
		next(err);
	}
};
