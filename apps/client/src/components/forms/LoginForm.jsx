import React, { useEffect } from "react";
import { Button, Input, Form, Flex } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { useForm } from "react-hook-form";

export default function LoginForm() {
	const [form] = Form.useForm();
	const [clientReady, setClientReady] = React.useState(false);

	// const { register, handleSubmit } = useForm();
	useEffect(() => {
		setClientReady(true);
	}, []);
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	return (
		<Form form={form} layout="vertical" className="w-4/12 max-w-sm" onFinish={onFinish}>
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
					<a href="" className="text-right">
						¿Olvidaste tu contraseña?
					</a>
				</div>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							block
							htmlType="submit"
							disabled={
								!clientReady ||
								!form.isFieldsTouched(true) ||
								!!form
									.getFieldsError()
									.filter(({ errors }) => errors.length).length
							}
						>
							Iniciar Sesión
						</Button>
					)}
				</Form.Item>
			</div>
		</Form>
	);
}
