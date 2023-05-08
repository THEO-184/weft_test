import Users from "./Features/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="*" element={<div>Error Page</div>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
