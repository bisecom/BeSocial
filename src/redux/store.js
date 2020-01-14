import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    dialogsPageReducer: dialogsReducer,
    profilePageReducer: profileReducer,
    sidebarReducer: sidebarReducer
});

let store = createStore(reducers);

export default store;