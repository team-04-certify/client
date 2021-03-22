import axios from "axios";
const baseUrl = "http://localhost:3000";

const setLoading = (payload) => {
  return { type: "SET_LOADING", payload };
};

const setError = (payload) => {
  return { type: "SET_ERROR", payload };
};

const setEvents = (payload) => {
  return { type: "SET_EVENTS", payload };
};

const setEvent = (payload) => {
  return { type: "SET_EVENT", payload };
};

const getEvents = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let events = await axios({
        method: "GET",
        url: `${baseUrl}/${payload.organizerName}`,
        headers: {
          access_token: localStorage.setItem("access_token"),
        },
      });
      console.log({ events });
      dispatch(setEvents(events));
    } catch (err) {
      dispatch(setError(err));
    }
    dispatch(setLoading(false));
  };
};

const addEvent = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let event = await axios({
        method: "POST",
        url: `${baseUrl}/events`,
        data: payload.data,
        headers: {
          access_token: payload.access_token,
        },
      });
      console.log({ action: payload.access_token });
      console.log({ event });
      dispatch(getEvents(event.OrganizerId));
      return event;
    } catch (err) {
      dispatch(setError(err));
    }
    dispatch(setLoading(false));
  };
};

export default {
  setLoading,
  setError,
  setEvents,
  setEvent,
  getEvents,
  addEvent,
};
