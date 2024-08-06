import { z } from "zod";

export const taskSchema = z.object({
	title: z
		.string({
			required_error: "El título es requerido",
		})
		.max(50, {
			message: "El título debe tener menos de 50 caracteres",
		})
		.min(1, {
			message: "El título debe tener al menos 1 caracteres",
		}),
	description: z
		.string({
			required_error: "La descripción es requerida",
		})
		.optional(),
	status: z.enum(["todo", "in-progress", "done"]).optional(),
});

export const updateTaskSchema = z.object({
	title: z
		.string({
			required_error: "El título es requerido",
		})
		.max(50, {
			message: "El título debe tener menos de 50 caracteres",
		})
		.min(1, {
			message: "El título debe tener al menos 1 caracteres",
		})
		.optional(),
	description: z
		.string({
			required_error: "La descripción es requerida",
		})
		.optional(),
	status: z.enum(["todo", "in-progress", "done"], { required_error: "El estado es requerido" ,message: "El estado debe ser 'todo', 'in-progress' o 'done'"}).optional(),
});

export const taskIdSchema = z.object({
	id: z.string({
		required_error: "El ID es requerido",
	}),
});
