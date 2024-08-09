import React from "react";
import RegisterForm from "../components/forms/RegisterForm";

function Register() {
	return (
		<div className="w-full h-screen flex">
			<div className="w-1/2 bg-cerise-red-50 relative flex">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#FF0066"
						d="M64.1,-20.5C69.3,-4.9,50.2,19,26.9,35.6C3.6,52.2,-24,61.6,-41.9,50.3C-59.8,39,-68,7.1,-59.4,-13.1C-50.9,-33.4,-25.4,-42.1,2,-42.7C29.5,-43.4,58.9,-36,64.1,-20.5Z"
						transform="translate(100 100)"
					/>
				</svg>
				<div className="bg-carise-red-200 w-full h-1/2 absolute bottom-0 right-0 glass-effect"></div>
			</div>
			<div className="w-1/2 flex flex-col items-center justify-center">
				<h3 className="text-3xl font-bold mb-6">Crea una cuenta nueva!!</h3>
				<RegisterForm />
			</div>
		</div>
	);
}

export default Register;
