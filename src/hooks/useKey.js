/* eslint-disable eqeqeq */
import { Store } from '../App';
const useKeys = ({ value: key, dataset: { value } }) => {
	const { state, setState } = Store;
	if (key === 'point') {
		if (state.value.toString().indexOf(value) === -1)
			setState((state) => ({ ...state, value: `${state.value}.` }));
	} else {
		setState((state) => ({
			...state,
			value:
				String(state.value) === '0' ? value : `${state.value}${value}`,
		}));
	}
};
export default useKeys;
