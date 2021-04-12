import WgKey from './../WgKey';
import { UseFunction } from './../../../hooks';

const handleClick = ({ target }) => {
	UseFunction(target);
};

const WgKeyFunction = ({ text, value }) => {
	return (
		<WgKey
			class-name='wg-calc__key--function'
			text={text}
			value={value}
			click={handleClick}
		/>
	);
};

export default WgKeyFunction;
