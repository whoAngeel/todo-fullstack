import React from "react";
import LoginForm from "../components/forms/LoginForm";

function Login() {
	return (
		<div className="w-full h-screen flex ">
			<div className="w-1/2 bg-cerise-red-50 flex items-center flex-col justify-center">
				<h3 className="text-3xl font-bold mb-6">Iniciar Sesión</h3>
					<LoginForm />
			</div>
			<div className="w-1/2 bg-cerise-red-600">image</div>
		</div>
	);
}

export default Login;
