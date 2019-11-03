export const initialState = {
  condition: "",
  postalCode: "",
  country: "US",
  gender: "",
  age: "",
  isFetchingData: false,
  error: false,
  data: [],
  totalResults: 0,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newState;
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
      newState = {
        ...state,
        isFetchingData: false,
        data: payload.studies,
        totalResults: payload.totalResults,
      };
      localStorage.setItem("studies", JSON.stringify(newState));
      return newState;
    case "DATA_FETCH_FAILURE":
      return {
        ...state,
        isFetchingData: false,
        error: payload,
        data: [],
      };
    case "LOAD_LOCAL":
      return {
        ...payload,
      };
    default:
      return state;
  }
};
