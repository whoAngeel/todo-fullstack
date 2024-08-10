import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
function App() {
	return (
		<>
			<ToastContainer
				autoClose={4000}
				position="top-center"
				pauseOnFocusLoss={false}
				limit={4}
			/>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
