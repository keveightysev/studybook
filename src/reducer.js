export const initialState = {
  condition: "",
  postalCode: "",
  distance: "",
  age: "",
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        [payload.name]: payload.value,
      };
    default:
      return state;
  }
};
