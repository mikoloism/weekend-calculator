import WgPadMisc from './pads/miscs';
import WgPadNumeric from './pads/numeric';
import WgPadFunction from './pads/function';

const WgPad = ({ children, store }) => {
	return (
		<div className='wg-calc__pad'>
			<div className='wg-calc__side wg-calc__side--left'>
				<WgPadMisc />
				<WgPadNumeric />
			</div>
			<div className='wg-calc__side wg-calc__side--right'>
				<WgPadFunction />
			</div>
		</div>
	);
};
export default WgPad;
