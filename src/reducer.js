export const initialState = {
  condition: "",
  postalCode: "",
  country: "US",
  distance: "",
  age: "",
  isFetchingData: false,
  error: false,
  data: [],
  totalResults: 0,
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
        data: [],
      };
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isFetchingData: false,
        data: payload.studies,
        totalResults: payload.totalResults,
      };
    case "DATA_FETCH_FAILURE":
      return {
        ...state,
        isFetchingData: false,
        error: payload,
        data: [],
      };
    default:
      return state;
  }
};
