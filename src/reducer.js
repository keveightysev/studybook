export const initialState = {
  condition: "",
  postalCode: "",
  distance: "",
  age: "",
  isFetchingData: false,
  error: false,
  data: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case "DATA_FETCH_START":
      return {
        ...state,
        isFetchingData: true,
      };
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isFetchingData: false,
        data: payload,
      };
    case "DATA_FETCH_FAILURE":
      return {
        ...state,
        isFetchingData: false,
        error: payload,
      };
    default:
      return state;
  }
};
