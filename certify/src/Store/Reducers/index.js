import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import organizerReducer from "./OrganizersReducer";

const rootReducer = combineReducers({
  organizer: organizerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
