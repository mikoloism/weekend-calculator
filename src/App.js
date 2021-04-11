import WgCalc from './components/wg-calc/WgCalc';
import './styles/main.scss';
import { useState } from 'react';

function App() {
	const [state, setState] = useState({});
	return <WgCalc store={{ state, setState }} />;
}

export default App;
