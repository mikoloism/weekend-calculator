const handleInput = (value) => {
	console.log(value);
};
const WgDisplay = ({ store }) => {
	return (
		<input
			className='wg-calc__display'
			type='text'
			inputMode='numeric'
			onInput={handleInput}
			value={'0'}
		/>
	);
};
export default WgDisplay;
