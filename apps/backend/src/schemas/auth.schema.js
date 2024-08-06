import { z } from "zod";

export const registerSchema = z.object({
	fullname: z
		.string({
			required_error: "El nombre de usuario es requerido",
			invalid_type_error: "El nombre de usuario debe ser un string",
		})
		.max(50, {
			message: "El nombre de usuario debe tener menos de 50 caracteres",
		})
		.min(3, {
			message: "El nombre de usuario debe tener al menos 3 caracteres",
		}),

	email: z
		.string({
			required_error: "El email es requerido",
		})
		.email({
			message: "El email debe ser un email válido",
		}),

	password: z
		.string({
			required_error: "La contraseña es requerida",
		})
		.min(6, {
			message: "La contraseña debe tener al menos 6 caracteres",
		}),
});

export const loginSchema = z.object({
	email: z
		.string({
			required_error: "El email es requerido",
		})
		.email({
			message: "El email debe ser un email válido",
		}),
	password: z
		.string({
			required_error: "La contraseña es requerida",
		})
		.min(6, {
			message: "La contraseña debe tener al menos 6 caracteres",
		}),
});

