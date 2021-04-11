import WgKey from './../WgKey';

const WgKeyFunction = ({ text, value, click }) => {
	return (
		<WgKey
			class-name='wg-calc__key--function'
			text={text}
			value={value}
			click={click}
		/>
	);
};

export default WgKeyFunction;
