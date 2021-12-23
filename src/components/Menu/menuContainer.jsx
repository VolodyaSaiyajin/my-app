import React from "react";
import * as axios from "axios";
import MenuNavigation from "./menu";
import {usersAPI} from "../../Redux/api";
import {connect} from "react-redux";
import {loginUserData} from "../../Redux/auth-reducer";

class MenuContainer extends React.Component {

    componentDidMount() {
        usersAPI.authMe().then(response => {
            debugger
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.loginUserData(id, email,login)
            }
        });
    }



    render() {
        return(
            <MenuNavigation {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        nickname: state.auth.login,
        userId: state.auth.id
    }
}

export default connect(mapStateToProps, {
    loginUserData
}) (MenuContainer);