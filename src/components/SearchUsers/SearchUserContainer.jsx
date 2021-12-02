import React from "react";
import style from "./SearchUser.css"
import {connect} from "react-redux";
import SearchUser from "./SearchUserC";
import {setUsersAction, subscribeUser, unsubscribeUser} from "../../Redux/searchUserReducer";

debugger

let mapStateToProps = (state) => {
    debugger
    return {
        usersPage: state.searchUserPage._users
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        onSubscribeUser: (userId) => {
            dispatch(subscribeUser(userId));

        },
        onUnsubscribeUser: (userId) => {
            dispatch(unsubscribeUser(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAction(users));
        }
    }
}


const SearchUserContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUser);

export default SearchUserContainer;