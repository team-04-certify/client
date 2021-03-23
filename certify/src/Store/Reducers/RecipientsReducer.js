const initialState = {
  recipients: [],
  recipient: {},
  loading: false,
  errors: [],
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
    case "SET_RECIPIENTS":
      return {
        ...state,
        recipients: action.payload,
      };

    case "SET_RECIPIENT":
      return {
        ...state,
        recipient: action.payload,
      };
    default:
      return state;
  }
}
