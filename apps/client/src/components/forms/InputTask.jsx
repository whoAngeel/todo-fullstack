import { Badge, Button, ConfigProvider, Form, Input, Space } from "antd";
import React, { useState } from "react";
import { ExperimentOutlined, LoadingOutlined } from "@ant-design/icons";

function InputTask() {
	const [isSending, setIsSending] = useState(false);
	const [form] = Form.useForm();
	const onFinish = (values) => {
		setIsSending(true);
		setTimeout(() => {
			console.log(values);
			form.setFieldValue("title", "");
			setIsSending(false);
		}, 2000);
	};
	return (
		<ConfigProvider
			theme={{
				token: {
					colorError: "#0ff",
				},
			}}
		>
			<Form onFinish={onFinish} form={form}>
				<Form.Item
					name="title"
					validateStatus="success"
					rules={[
						{
							required: true,
							message: "Escribe algo",
						},
						{
							whitespace: true,
							message: "Escribe algo por favor",
						},
					]}
				>
					<Input
						variant="outlined"
						disabled={isSending}
						allowClear
						prefix={
							isSending ? (
								<LoadingOutlined spin />
							) : (
								<ExperimentOutlined />
							)
						}
					/>
					{/* <Badge text="Cargando" offset={[10, 10]}></Badge> */}
				</Form.Item>
			</Form>
		</ConfigProvider>
	);
}

export default InputTask;
