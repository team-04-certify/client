const initialState = {
  organizer: {},
  loading: false,
  error: "",
  access_token: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_ORGANIZER":
      return {
        ...state,
        organizer: action.payload,
      };
    case "SET_REGISTER":
      return {
        ...state,
        organizer: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        organizer: action.payload,
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        access_token: action.payload,
      };

    default:
      return state;
  }
}
