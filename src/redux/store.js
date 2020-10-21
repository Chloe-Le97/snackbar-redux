import { combineReducers, createStore } from "redux";
import snackbarReducer from "./reducer";

const reducer = combineReducers({
  snackbar: snackbarReducer
});

const store = createStore(reducer, {});

export default store;
