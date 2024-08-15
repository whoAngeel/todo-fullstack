import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
import { TaskProvider } from "./context/TasksContext";
import { BannerProvider } from "./context/BannerContext";
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
							<BannerProvider>
								<TaskProvider>
									<ProtectedRoute>
										<Home />
									</ProtectedRoute>
								</TaskProvider>
							</BannerProvider>
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
