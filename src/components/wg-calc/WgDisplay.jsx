import { Store } from './../../App';

const WgDisplay = () => {
	const { state } = Store;
	return (
		<input
			className='wg-calc__display'
			type='text'
			inputMode='numeric'
			onInput={(t) => {
				console.log('[oninput] ', t);
			}}
			onChange={(t) => {
				console.log('[onChange] ', t);
			}}
			value={state.value}
		/>
	);
};
export default WgDisplay;
