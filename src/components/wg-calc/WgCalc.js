/* eslint-disable no-unused-vars */
import WgDisplay from './WgDisplay';
import WgPad from './WgPad';
const WgCalc = ({ store }) => {
	const { state, setState } = store;
	function handleAddNumber({ target }) {
		console.log(target.value);
	}
	return (
		<div className='wg-calc'>
			<WgDisplay store={store} />
			<WgPad store={store} />
		</div>
	);
};
export default WgCalc;
