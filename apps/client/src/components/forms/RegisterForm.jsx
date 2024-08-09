import React from "react";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
function RegisterForm() {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [clientReady, setClientReady] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() => {
		setClientReady(true);
	}, []);

	const onFinish = (values) => {
		setLoading(true);
		axios
			.post("/api/auth/register", values)
			.then((res) => {
				// console.log(res.data);
				Cookies.set("token", res.data.token);
				navigate("/");
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			})
			.finally(() => setLoading(false));
	};
	return (
		<Form
			onFinish={onFinish}
			form={form}
			layout="vertical"
			className="w-1/2 max-w-sm"
		>
			<Form.Item
				name={"fullname"}
				label="Nombre Completo"
				tooltip="El nombre del usuario es requerido"
				rules={[
					{
						required: true,
						message: "El nombre completo del usuario es requerido",
					},
					{
						type: "string",
						message: "El nombre completo debe ser una cadena de texto",
					},
					{
						pattern:
							/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
						message: "El nombre del usuario debe ser un nombre válido",
					},
				]}
			>
				<Input placeholder="Angel Zorrilla Hernandez"></Input>
			</Form.Item>
			<Form.Item
				label="Correo Electronico"
				tooltip="El email es requerido"
				name={"email"}
				rules={[
					{
						type: "email",
						message: "El email debe ser un email válido",
					},
					{
						required: true,
						message: "El email es requerido",
					},
				]}
			>
				<Input placeholder="usuario@example.com"></Input>
			</Form.Item>
			<Form.Item
				label="Contraseña"
				name={"password"}
				tooltip="La contraseña es requerida"
				rules={[
					{ required: true, message: "La contraseña es requerida" },
					{
						min: 6,
						message: "La contraseña debe tener al menos 6 caracteres",
					},
					{
						pattern: /[a-z]/,
						message:
							"La contraseña debe tener al menos una letra minúscula",
					},
					{
						pattern: /[A-Z]/,
						message:
							"La contraseña debe tener al menos una letra mayúscula",
					},
					{
						pattern: /\d/,
						message: "La contraseña debe tener al menos un número",
					},
				]}
			>
				<Input.Password
					placeholder="********"
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
				></Input.Password>
			</Form.Item>
			<Form.Item
				label="Confirmar Contraseña"
				name={"confirmPassword"}
				dependencies={["password"]}
				hasFeedback
				rules={[
					{
						required: true,
						message: "La contraseña es requerida",
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue("password") == value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error("La contraseña ingresada no es válida")
							);
						},
					}),
				]}
			>
				<Input.Password placeholder="********"></Input.Password>
			</Form.Item>
			<Form.Item shouldUpdate>
				{() => (
					<Button
						type="primary"
						htmlType="submit"
						block
						loading={loading}
						disabled={
							!clientReady ||
							!form.isFieldsTouched(true) ||
							!!form
								.getFieldsError()
								.filter(({ errors }) => errors.length).length
						}
					>
						{loading ? <span>Creando...</span> : "Crear"}
					</Button>
				)}
			</Form.Item>
			<div>
				Ya tienes una cuenta? <Link to="/login">Inicia Sesión aquí</Link>
			</div>
		</Form>
	);
}

export default RegisterForm;
