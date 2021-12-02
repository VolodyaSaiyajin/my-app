import React from "react";
import avatarImage from "../Dialogs/users/images/donilaCotov.jpg"
import style from "./SearchUser.css"
import * as axios from "axios";

class SearchUser extends React.Component {
    constructor(props) {
        super(props);
        if (props.usersPage.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                

                {
                    this.props.usersPage.map(u =>
                        <div key={u.id} className="user-element">
                            <div className="user-element_search-users">
                                <div className="search-users__item">
                                    <div className="search-users__item-row">
                                        <img className="search-users__avatar" src={avatarImage} alt=""/>
                                        <p className="search-users__nickname">{u.name}</p>
                                    </div>
                                    {u.subscribe
                                        ? <button onClick={() => (this.props.onUnsubscribeUser(u.id))}
                                                  className="search-users__subscribe">unsubscribe</button>
                                        : <button onClick={() => (this.props.onSubscribeUser(u.id))}
                                                  className="search-users__subscribe">subcribe</button>}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        )
    }
}

export default SearchUser;