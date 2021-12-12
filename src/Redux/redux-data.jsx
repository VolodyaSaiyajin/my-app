
import dialogReducer from "./dialogReducer";
import profileReducer from "./postingReducer";
import searchUserReducer from './searchUserReducer'
import {combineReducers, createStore} from "redux";

debugger


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    searchUserPage: searchUserReducer,
});

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    latency: 0
}));

window.store = store;

export default store;