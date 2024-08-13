import {
	Badge,
	Button,
	ConfigProvider,
	Form,
	Input,
	message,
	Popconfirm,
	Space,
} from "antd";
import React, { useState } from "react";
import { ExperimentOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useTasks } from "../../context/TasksContext";
import Cookies from "js-cookie";

function InputTask() {
	const [isSending, setIsSending] = useState(false);
	const { tasks, isLoading, addTask, setTasks } = useTasks();
	const [messageApi, contextHolder] = message.useMessage();

	const [form] = Form.useForm();
	const onFinish = (values) => {
		setIsSending(true);
		// messageApi.info("Guardando la tarea");
		axios
			.post(
				"/api/tasks",
				{
					title: form.getFieldValue("title"),
				},
				{
					headers: {
						Authorization: "Bearer " + Cookies.get("token"),
					},
				}
			)
			.then((res) => {
				console.log(res.data);
				form.setFieldValue("title", "");
				setTasks([...tasks, res.data]);
			})
			.catch((err) => {
				console.log(err);
				form.resetFields();
				messageApi.open({
					type: "error",
					content: `Error: ${err.response}`,
				});
			})
			.finally(() => setIsSending(false));
	};
	return (
		<ConfigProvider
			theme={{
				token: {
					colorError: "#0ff",
				},
			}}
		>
			{contextHolder}
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
