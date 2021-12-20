import React from "react";
import style from "./SearchUser.css"
import {connect} from "react-redux";
import SearchUser from "./SearchUserC";
import {
    setUsersAction,
    subscribeUser,
    unsubscribeUser,
    setSelectedUsers,
    setFetching
} from "../../Redux/searchUserReducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.searchUserPage._users,
        pageSize: state.searchUserPage.pageSize,
        totalUsersCount: state.searchUserPage.totalUsersCount,
        currentPage: state.searchUserPage._selectedUsersCount

    }
}


const SearchUserContainer = connect(mapStateToProps, {
    setFetching,
    onSubscribeUser: subscribeUser,
    onUnsubscribeUser: unsubscribeUser,
    setUsers: setUsersAction,
    setCurrentUsersPage: setSelectedUsers

})(SearchUser);

export default SearchUserContainer;