import WgKey from './../WgKey';
import { UseMisc } from './../../../hooks';

const hanldeClick = ({ target }) => {
	UseMisc(target);
};

const WgKeyMisc = ({ text, value }) => {
	return (
		<WgKey
			class-name='wg-calc__key--misc'
			text={text}
			value={value}
			click={hanldeClick}
		/>
	);
};

export default WgKeyMisc;
