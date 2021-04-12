import WgCalc from './components/wg-calc/WgCalc';
import './styles/main.scss';
import { useState } from 'react';
const Store = { state: null, setState: null };
function App() {
	const [state, setState] = useState({
		value: 0,
	});
	Store.state = state;
	Store.setState = setState;
	return (
		<div className='container'>
			<div className='wrapper'>
				<WgCalc />
			</div>
		</div>
	);
}

export { Store };
export default App;
