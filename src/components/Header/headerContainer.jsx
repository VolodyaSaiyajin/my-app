import React from "react";
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {loginUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
           if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.loginUserData(id, email,login)
           }
        });
    }



    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        nickname: state.auth.login
    }
}

export default connect(mapStateToProps, {
    loginUserData
}) (HeaderContainer);