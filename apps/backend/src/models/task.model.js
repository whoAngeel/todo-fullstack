import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},

		status: {
			type: String,
			required: true,
			enum: ["todo", "in-progress", "done"],
			default: "todo",
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Task", TaskSchema);
