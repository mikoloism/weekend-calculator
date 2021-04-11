import { Store } from '../App';

const useKeys = (number) => {
	const { state, setState } = Store;
	if (number === 'point') {
		if (state.textInputed.indexOf('.') === -1) {
			setState((prev) => ({
				...prev,
				textInputed: `${prev.textInputed}.`,
			}));
			return true;
		} else return false;
		// eslint-disable-next-line eqeqeq
	} else if (number == Number(number)) {
		if (state.textInputed.length === 1) {
			if (state.textInputed == '0') {
				setState((prev) => ({
					...prev,
					textInputed: `${number}`,
				}));
			} else
				setState((prev) => ({
					...prev,
					textInputed: `${prev.textInputed}${number}`,
				}));
			return true;
		}
	} else return false;
};

export default useKeys;
