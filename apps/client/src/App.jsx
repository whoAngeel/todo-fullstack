import { Outlet } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
function App() {
	return (
    <>
    <ToastContainer autoClose={4000} position="top-center" pauseOnFocusLoss={false} limit={4}/> 
    <Outlet />
    </>
	);
}

export default App;
