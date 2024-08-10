import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="w-screen h-screen flex justify-center">
			<div className="w-1/4 flex flex-col items-center justify-center content-around gap-4">
				<h2 className="text-9xl font-bold">404</h2>
				<p className="text-3xl font-bold">Page Not Found</p>
				<Link to="/" className="w-full">
					<Button type="primary" block>
						Regresar
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
