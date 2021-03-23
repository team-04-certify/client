const initialState = {
  organizer: {},
  loading: false,
  errors: [],
  access_token: null,
  successRegister: false,
  isLogin: false,
  page: "",
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
    case "SET_REGISTER":
      return {
        ...state,
        successRegister: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        access_token: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
}
