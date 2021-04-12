import { Store } from './../App';

const useFunction = ({ value: key, dataset: { key: value } }) => {
	const { setState } = Store;
	if (key === 'plus')
		setState((state) => ({
			...state,
			value: String(state.value).endsWith('+')
				? state.value
				: `${state.value}+`,
		}));
};

export default useFunction;
