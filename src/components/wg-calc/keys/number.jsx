import WgKey from './../WgKey';

const WgKeyNumber = ({ text, value, click }) => {
	return (
		<WgKey
			class-name='wg-calc__key--number'
			text={text}
			value={value}
			click={click}
		/>
	);
};

export default WgKeyNumber;
