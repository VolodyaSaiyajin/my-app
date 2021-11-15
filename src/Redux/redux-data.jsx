
import dialogReducer from "./dialogReducer";
import profileReducer from "./postingReducer";
import {combineReducers, createStore} from "redux";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer


});

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    latency: 0
}));

export default store;