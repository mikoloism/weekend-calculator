/* eslint-disable no-unused-vars */
import WgDisplay from './WgDisplay';
import WgPads from './WgPad';
const WgCalc = () => {
	function handleAddNumber({ target }) {
		console.log(target.value);
	}
	return (
		<div className='wg-calc'>
			<WgDisplay />
			<WgPads />
		</div>
	);
};
export default WgCalc;
