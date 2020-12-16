import { combineReducers } from "redux";
import { Home, Detail } from "../modules";

const rootReducer = combineReducers({ Home, Detail });
export default rootReducer;
