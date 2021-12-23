import React from "react";
import avatarImage from "../Dialogs/users/images/donilaCotov.jpg"
import * as axios from "axios";
import Users from "./Users";
import {usersAPI} from "../../Redux/api";
import {setFetching} from "../../Redux/searchUserReducer";

class SearchUser extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk()
    }

    onPageChanged = (pageN) => {
        this.props.setCurrentUsersPage(pageN)
        setFetching(true)
        usersAPI.getUsers(pageN, this.props.pageSize).then(data => {
            setFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}

                      usersPage={this.props.usersPage}
                      onSubscribeUser={this.props.onSubscribeUser}
                      onUnsubscribeUser={this.props.onUnsubscribeUser}
                      setUsers={this.props.setUsers}
                      setCurrentUsersPage={this.props.setCurrentUsersPage}
                      setFetching={this.props.setFetching}
        />
    }
}

export default SearchUser;