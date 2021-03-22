import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import organizerReducer from "./OrganizersReducer";
import eventReducer from "./EventsReducer";

const rootReducer = combineReducers({
  organizer: organizerReducer,
  event: eventReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
