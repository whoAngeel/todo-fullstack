import React, { useEffect } from "react";
import { Button, Input, Form, Flex } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../context/AuthContext";
import { signin } from "../../api/auth";

export default function LoginForm() {
	const [form] = Form.useForm();
	const [clientReady, setClientReady] = React.useState(false);
	const { login, loading } = useAuth();
	const [isLoading, setIsLoading] = React.useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		Cookies.remove("token");
		setClientReady(true);
	}, []);
	const onFinish = async (values) => {
		setIsLoading(true);
		signin(values)
			.then((res) => {
				Cookies.set("token", res.data.token);
				navigate("/");
			})
			.catch((err) => {
				toast.error(
					err.response.data.statusCode === 401
						? "No autorizado"
						: "Error de inicio de sesión"
				);
			})
			.finally(() => setIsLoading(false));
	};
	return (
		<Form
			form={form}
			layout="vertical"
			className="w-4/12 max-w-sm"
			onFinish={onFinish}
		>
			<Form.Item
				label="Email:"
				tooltip="El email es un campo requerido"
				name={"email"}
				rules={[
					{
						required: true,
						message: "El email es requerido",
					},
					{
						pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
						message: "El correo electrónico debe ser válido",
					},
				]}
			>
				<Input placeholder="user@example.com" />
			</Form.Item>
			<Form.Item
				label="Contraseña:"
				tooltip="La contraseña es un campo requerido"
				name={"password"}
				rules={[
					{
						required: true,
						message: "La contraseña es un campo requerido",
					},
					{
						min: 6,
						message: "La contraseña debe tener al menos 6 caracteres",
					},
				]}
			>
				<Input.Password
					placeholder="********"
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
				/>
			</Form.Item>
			<div className="flex flex-col gap-3">
				<div className="flex justify-end ">
					<Link to="/forgot-password" className="link text-right">
						¿Olvidaste tu contraseña?
					</Link>
				</div>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							block
							loading={isLoading}
							htmlType="submit"
							disabled={
								!clientReady ||
								!form.isFieldsTouched(true) ||
								!!form
									.getFieldsError()
									.filter(({ errors }) => errors.length).length
							}
						>
							{isLoading ? <span>Cargando...</span> : "Iniciar Sesión"}
						</Button>
					)}
				</Form.Item>
				<div>
					¿No tienes cuenta?
					<Link to="/register" className="link no-underline">
						Registrate aquí
					</Link>
				</div>
			</div>
		</Form>
	);
}
