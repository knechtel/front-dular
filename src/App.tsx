import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.tsx'
import DashBoard from './DashBoard.tsx'
const  App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/dash" element={<DashBoard />} />
		</Routes>
	</BrowserRouter>
);
export default App