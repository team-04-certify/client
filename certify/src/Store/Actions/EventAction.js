import axios from "axios";
const baseUrl = "http://localhost:4000";

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

const getEvents = (access_token) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let events = await axios({
        method: "GET",
        url: `${baseUrl}/`,
        headers: {
          access_token: access_token,
        },
      });

      dispatch(setEvents(events.data));
    } catch (err) {
      console.log(err.response);
      dispatch(setError(err));
    }
    dispatch(setLoading(false));
  };
};

const getEvent = (payload) => {
  return async (dispatch) => {
    try {
      let event = await axios({
        method: "GET",
        url: `${baseUrl}/events/${payload.eventId}`,
        headers: {
          access_token: payload.access_token,
        },
      });
      return dispatch(setEvent(event.data));
    } catch (err) {
      console.log(err.response);
      dispatch(setError(err));
    }
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
      dispatch(getEvents(event.OrganizerId));
      return event;
    } catch (err) {
      dispatch(setError(err));
    }
    dispatch(setLoading(false));
  };
};

const updateEvent = (payload) => {
  return async (dispatch) => {
    try {
      let temp = await axios({
        method: "PUT",
        url: `${baseUrl}/events/${payload.id}`,
        data: payload.data,
        headers: {
          access_token: payload.access_token,
        },
      });

      dispatch(getEvents(payload.access_token));
    } catch (err) {
      dispatch(setError(err));
    }
  };
};

const deleteEvent = (payload) => {
  return async (dispatch) => {
    try {
      let temp = await axios({
        method: "DELETE",
        url: `${baseUrl}/events/${payload.id}`,
        headers: {
          access_token: payload.access_token,
        },
      });

      dispatch(getEvents(payload.access_token));
    } catch (err) {
      dispatch(setError(err));
    }
  };
};

const uploadTemplate = (payload) => {
  console.log(payload, '======payload')
  return async (dispatch) => {
    try {
      await axios({
        method: "POST",
        url: `${baseUrl}/upload/banner`,
        data: payload.data,
        headers: {
          access_token: payload.access_token,
          'content-type': 'multipart/form-data' 
        }
      });

      dispatch(getEvents(payload.access_token));
    } catch (err) {
      dispatch(setError(err));
    }
  };
};

export default {
  setLoading,
  setError,
  setEvents,
  setEvent,
  getEvents,
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  uploadTemplate,
};
