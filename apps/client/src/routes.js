import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import App from "./App";
import ErrorPage from "./views/ErrorPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
        errorElement: <ErrorPage />,

		children: [
            {
                path: '/',
                element: <Home/>
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
