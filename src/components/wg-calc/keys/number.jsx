import WgKey from './../WgKey';
import { UseKey } from '../../../hooks';

const hanldeClick = ({ target }) => {
	UseKey(target);
};

const WgKeyNumber = ({ text, value }) => {
	return (
		<WgKey
			class-name='wg-calc__key--number'
			text={text}
			value={value}
			click={hanldeClick}
		/>
	);
};

export default WgKeyNumber;
