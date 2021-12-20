import React from "react";
import avatarImage from "../Dialogs/users/images/donilaCotov.jpg";
import style from "./SearchUser.css"
import {NavLink} from "react-router-dom";
import UsersPhoto from "./SearchUserCPhoto";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    debugger
    return (
        <div className="users">
            <div className="users__users-pages">
                {
                    pages.map(p => {
                            return (
                                <span onClick={() => {
                                    props.onPageChanged(p)
                                }}
                                      className={props.currentPage === p && "users__users-count--current" || "users__users-count"}>{p}</span>
                            )
                        }
                    )
                }
            </div>

            {
                props.usersPage.map(u =>

                    <div key={u.id} className="user-element">

                        <div className="user-element_search-users">
                            <div className="search-users__item">
                                <div className="search-users__item-row">
                                    <NavLink to={'/profile/' + u.id}>
                                        <UsersPhoto avatar={u.photos.small}/>
                                        <p className="search-users__nickname">{u.name}</p>
                                    </NavLink>
                                </div>
                                {
                                    u.followed ? <button onClick={ () => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e063c5c6-4a39-41e1-a215-e5e00f3c6eb8"
                                                }
                                            }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.onUnsubscribeUser(u.id);
                                                    window.location.reload();
                                                }

                                            })

                                        }
                                    }
                                              className="search-users__subscribe">unsubscribe</button>
                                    : <button onClick={ () => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e063c5c6-4a39-41e1-a215-e5e00f3c6eb8"
                                                }
                                            }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.onSubscribeUser(u.id);
                                                    window.location.reload();
                                                }

                                            })
                                        }
                                    }
                                              className="search-users__subscribe">subcribe</button>}
                            </div>
                        </div>
                    </div>
                )
            }

            <div className="users__users-pages">
                {
                    pages.map(p => {
                            return (
                                <span onClick={() => {
                                    props.onPageChanged(p)
                                }}
                                      className={props.currentPage === p && "users__users-count--current" || "users__users-count"}>{p}</span>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Users;