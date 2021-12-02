import React from "react";
import style from "./SearchUser.css"
import {connect} from "react-redux";
import SearchUser from "./SearchUserC";
import {setUsersAction, subscribeUser, unsubscribeUser, setSelectedUsers} from "../../Redux/searchUserReducer";

debugger

let mapStateToProps = (state) => {
    debugger
    return {
        usersPage: state.searchUserPage._users,
        pageSize: state.searchUserPage.pageSize,
        totalUsersCount: state.searchUserPage.totalUsersCount,
        currentPage: state.searchUserPage._selectedUsersCount

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
        },
        setCurrentUsersPage: (selectedCount) => {
            dispatch(setSelectedUsers(selectedCount));
        }
    }
}


const SearchUserContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUser);

export default SearchUserContainer;