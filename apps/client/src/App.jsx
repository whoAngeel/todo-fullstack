import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
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
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					>
						{/* <Route element={<Home />} /> */}
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
