import { Store } from './../App';
const useInput = (text) => {
	const { setState } = Store;
	setState((state) => ({
		...state,
		textInputed: `${state.textInputed}${text}`,
	}));
};
export default useInput;
