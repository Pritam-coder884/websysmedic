import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Main/Home";
import About from "./Main/About";
import Features from "./Main/Features";
import Prescription from "./Main/Prescription";
import PdfDownloader from "./components/PdfDownloader";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");
	// console.log(user)

	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} /> }
			<Route path="/about" exact element={<About />} />
			<Route path="/features" exact element={<Features />} />
			<Route path="/prescription" exact element={<Prescription />} />
			<Route path="/pdf" exact element={<PdfDownloader />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
