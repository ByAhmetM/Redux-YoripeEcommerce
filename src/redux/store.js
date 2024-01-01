import { applyMiddleware, createStore } from "redux";
import productReducers from "./reducers/productReducers";
import { thunk } from "redux-thunk";

export default createStore(productReducers, applyMiddleware(thunk));
