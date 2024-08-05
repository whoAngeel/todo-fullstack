import morgan from "morgan";
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { routerAPI } from "./routes/index.js";
import {
	errorHandler,
	logErrors,
	boomErrorHandler,
	mongooseErrorHandler,
} from "./middlewares/error.handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World");
});

routerAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(mongooseErrorHandler);
app.use(errorHandler);

connectDB();

app.listen(3000, () => {
	console.log("Server running on port http://localhost:3000");
});
