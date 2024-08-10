import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Home from "./views/Home.jsx";
import Register from "./views/Register.jsx";
import Login from "./views/Login.jsx";
// import { profile } from "./api/auth.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<RouterProvider router={router}></RouterProvider>
	</AuthProvider>
);
