import axios from "axios";
const baseUrl = "http://localhost:4000";

const setLoading = (payload) => {
  return { type: "SET_LOADING", payload };
};

const setError = (payload) => {
  return { type: "SET_ERROR", payload };
};

const setRecipients = (payload) => {
  return { type: "SET_RECIPIENTS", payload };
}

const getAllRecipients = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const recipients = await axios({
        method: "GET",
        url: `${baseUrl}/recipients/all/${payload.eventId}`,
        headers: {
          access_token: payload.access_token,
        },
      });
      dispatch(setRecipients(recipients.data));
    } catch (err) {
      console.log(err.response);
      dispatch(setError(err));
    }
    dispatch(setLoading(false));
  };
};

const addRecipients = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let event = await axios({
        method: "POST",
        url: `${baseUrl}/recipients/${payload.eventId}`,
        data: payload.data,
        headers: {
          access_token: payload.access_token,
        }
      });
      dispatch(getAllRecipients({
        access_token: payload.access_token,
        eventId: payload.eventId
      }));
      return event;
    } catch (err) {
      dispatch(setError(err));
    }
    dispatch(setLoading(false));
  };
};

const editRecipients = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let event = await axios({
        method: "PUT",
        url: `${baseUrl}/recipients/${payload.eventId}/${payload.recipientId}`,
        data: payload.data,
        headers: {
          access_token: payload.access_token,
        }
      });
      dispatch(getAllRecipients({
        access_token: payload.access_token,
        eventId: payload.eventId
      }));
      return event;
    } catch (err) {
      dispatch(setError(err));
    }
    dispatch(setLoading(false));
  };
};

const deleteRecipients = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let event = await axios({
        method: "DELETE",
        url: `${baseUrl}/recipients/${payload.recipientId}`,
        data: payload.data,
        headers: {
          access_token: payload.access_token,
        }
      });
      dispatch(getAllRecipients({
        access_token: payload.access_token,
        eventId: payload.eventId
      }));
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
  addRecipients,
  editRecipients,
  getAllRecipients,
  deleteRecipients
}