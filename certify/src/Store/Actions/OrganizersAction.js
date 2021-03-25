import axios from "axios";
const baseUrl = "https://certify-app01.herokuapp.com";

const setLoading = (payload) => {
  return { type: "SET_LOADING", payload };
};

const setError = (payload) => {
  return { type: "SET_ERROR", payload };
};

const setOrganizer = (payload) => {
  return { type: "SET_ORGANIZER", payload };
};

const setRegister = (payload) => {
  return { type: "SET_REGISTER", payload };
};

const setLogin = (payload) => {
  return { type: "SET_LOGIN", payload };
};

const setAccessToken = (payload) => {
  return { type: "SET_ACCESS_TOKEN", payload };
};

const setPage = (payload) => {
  return { type: "SET_PAGE", payload };
};

const register = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      method: "POST",
      url: `${baseUrl}/register`,
      data: payload,
    })
      .then((user) => {
        dispatch(setRegister(true));
      })
      .catch((err) => {
        dispatch(setError(err.response.data));
      });
    dispatch(setLoading(false));
  };
};

const getLogin = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      method: "POST",
      url: `${baseUrl}/login`,
      data: payload,
    })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("access_token", response.data.access_token);
        }
        dispatch(setLogin(true));
      })
      .catch((err) => {
        dispatch(setError(err.response.data));
      });
    dispatch(setLoading(false));
  };
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  setLoading,
  setError,
  setOrganizer,
  setRegister,
  register,
  setLogin,
  getLogin,
  setAccessToken,
  logout,
  setPage,
};
