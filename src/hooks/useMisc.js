/* eslint-disable eqeqeq */
import { Store } from '../App';
const useMisc = ({ value: key, dataset: { value } }) => {
	const { setState } = Store;
	if (key === 'clear') setState((state) => ({ ...state, value: '0' }));
	else if (key === 'plus-minus') {
		setState((state) => ({
			...state,
			value: String(state.value).startsWith('-')
				? Array.from(state.value).slice(1).join('')
				: `-${state.value}`,
		}));
	} else if (key === 'precent') {
		setState((state) => ({ ...state }));
	}
};
export default useMisc;
