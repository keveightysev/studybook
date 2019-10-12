export const initialState = {
	condition: '',
	postalCode: '',
};

export const reducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		default:
			return state;
	}
};
