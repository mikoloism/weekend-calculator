import WgKey from './../WgKey';

const WgKeyMisc = ({ text, value, click }) => {
	return (
		<WgKey
			class-name='wg-calc__key--misc'
			text={text}
			value={value}
			click={click}
		/>
	);
};

export default WgKeyMisc;
