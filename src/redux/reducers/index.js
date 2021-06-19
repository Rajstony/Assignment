import { combineReducers } from "redux";
import { userReducer,selectedUserReducer } from "./userReducer";

const reducers = combineReducers({
    allUsers:userReducer,
    product:selectedUserReducer,
});

export default reducers;