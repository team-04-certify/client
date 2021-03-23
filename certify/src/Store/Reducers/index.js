import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import organizerReducer from "./OrganizersReducer";
import eventReducer from "./EventsReducer";
import recipientReducer from "./RecipientsReducer";

const rootReducer = combineReducers({
  organizer: organizerReducer,
  event: eventReducer,
  recipient: recipientReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
