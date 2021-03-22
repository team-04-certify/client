const initialState = {
  loading: false,
  errors: [],
  events: [],
  event: {},
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
        errors: action.payload,
      };
    case "SET_EVENTS":
      return {
        ...state,
        events: action.payload,
      };
    case "SET_EVENT":
      return {
        ...state,
        event: action.payload,
      };

    default:
      return state;
  }
}
