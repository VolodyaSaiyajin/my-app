import React from "react";
import avatarImage from "../Dialogs/users/images/donilaCotov.jpg"
import * as axios from "axios";
import Users from "./Users";
import {getUsersFromAPI} from "../../Redux/api";
import {setFetching} from "../../Redux/searchUserReducer";

class SearchUser extends React.Component {

    componentDidMount() {
        setFetching(true)
        getUsersFromAPI(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.setUsers(response.data.items)
            setFetching(false)
            }
        )
    }

    onPageChanged = (pageN) => {
        this.props.setCurrentUsersPage(pageN)
        setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageN}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            setFetching(false)
            this.props.setUsers(response.data.items)
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