import React from "react";
import LoginForm from "../components/forms/LoginForm";

function Login() {
	return (
		<div className="w-full h-screen flex ">
			<div className="w-1/2  flex items-center flex-col justify-center">
				<h3 className="text-3xl font-bold mb-6">Iniciar Sesión</h3>
				<LoginForm />
			</div>
			<div className="w-1/2 bg-cerise-red-50 relative ">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#FF0066"
						d="M66.2,-20.3C72.3,-2.9,54.2,23.4,32.3,37.9C10.3,52.3,-15.6,54.7,-36.9,41.4C-58.2,28.2,-74.9,-0.8,-68,-19.4C-61.1,-38,-30.5,-46.1,-0.2,-46.1C30.1,-46,60.2,-37.7,66.2,-20.3Z"
						transform="translate(100 100)"
					/>
				</svg>
				<div className="bg-cerise-red-200 w-full h-1/2 absolute bottom-0 left-0 glass-effect"></div>
			</div>
		</div>
	);
}

export default Login;
