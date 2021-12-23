import dialogReducer from "./dialogReducer";
import profileReducer from "./postingReducer";
import searchUserReducer from './searchUserReducer'
import {combineReducers, createStore, applyMiddleware} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    searchUserPage: searchUserReducer,
    auth: authReducer,
});

let store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
