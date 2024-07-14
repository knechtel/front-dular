import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import DashBoard from './DashBoard'
import CadClient from './component/CadClient';
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/dash" element={<DashBoard />} />
			<Route path="/cad" element={<CadClient />} />
		</Routes>
	</BrowserRouter>
);
export default App