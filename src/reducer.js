export const initialState = {
	condition: '',
	postalCode: '',
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
