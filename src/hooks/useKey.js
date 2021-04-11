import Store from './../store';

const useKeys = (number) => {
	const { state, actions } = Store;
	if (number === 'point') {
		if (state.textInputed.indexOf('.') !== -1) {
			actions((state) => ({
				...state,
				textInputed: `${state.textInputed}.`,
			}));
			return true;
		} else return false;
		// eslint-disable-next-line eqeqeq
	} else if (number == Number(number)) {
		actions((prev) => ({
			...prev,
			textInputed: `${prev.textInputed}${number}`,
		}));
		return true;
	} else return false;
};

export default useKeys;
