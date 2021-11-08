
import dialogReducer from "./dialogReducer";
import profileReducer from "./postingReducer";
import {combineReducers, createStore} from "redux";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer


});

let store = createStore(reducers);

export default store;