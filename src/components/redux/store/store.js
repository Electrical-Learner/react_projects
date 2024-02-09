import { createStore } from "redux";
import authReducer from "../reducers/authReducers";

const store = createStore(authReducer);

export default store;
