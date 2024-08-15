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
	isCompleted: z
		.boolean({
			message: "Este campo debe ser un booleano",
		})
		.optional(),
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

	isCompleted: z
		.boolean({ message: "Este campo debe ser un booleano" })
		.optional(),
});

export const taskIdSchema = z.object({
	id: z.string({
		required_error: "El ID es requerido",
	}),
});
