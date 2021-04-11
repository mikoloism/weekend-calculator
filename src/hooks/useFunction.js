import { Store } from './../App';
const useFunction = () => {
	const { state, setState } = Store;
	return { state, setState };
};
export default useFunction;
