import axios from "axios";
const baseUrl = "http://localhost:3000";

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

const getRegister = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      method: "POST",
      url: `${baseUrl}/register`,
      data: payload,
    })
      .then((user) => {
        dispatch(setRegister(user));
      })
      .catch((err) => {
        console.log({ err: err.response.data });
        return dispatch(setError(err.response.data));
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
      .then((user) => {
        dispatch(setLoading(user));
      })
      .catch((err) => {
        dispatch(setError(err.response.data));
      });
  };
};

export default {
  setLoading,
  setError,
  setOrganizer,
  setRegister,
  getRegister,
  setLogin,
  getLogin,
  setAccessToken,
};
