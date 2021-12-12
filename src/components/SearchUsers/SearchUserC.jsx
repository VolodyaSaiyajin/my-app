import React from "react";
import avatarImage from "../Dialogs/users/images/donilaCotov.jpg"
import * as axios from "axios";
import Users from "./Users";

class SearchUser extends React.Component {

    componentDidMount() {

        if (this.props.usersPage.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            })

        }
    }

    onPageChanged = (pageN) => {
        this.props.setCurrentUsersPage(pageN)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageN}&count=${this.props.pageSize}`).then(response => {
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
        />
    }
}

export default SearchUser;