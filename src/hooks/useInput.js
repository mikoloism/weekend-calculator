import Store from './../store';
const useInput = (text) => {
	const { actions } = Store;
	actions((state) => ({
		...state,
		textInputed: `${state.textInputed}${text}`,
	}));
};
export default useInput;
