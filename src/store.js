import { useState } from 'react';

function Store() {
	const [state, setState] = useState({
		textInputed: '',
		valueInputed: 0,
	});
	return { state, actions: setState };
}

export default Store;
