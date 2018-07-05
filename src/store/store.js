import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import MainReducer from "../reducers/mainReducer";
import LabelsReducer from '../reducers/Labels';

export default createStore(combineReducers({ MainReducer, LabelsReducer }), {}, applyMiddleware(thunk));
