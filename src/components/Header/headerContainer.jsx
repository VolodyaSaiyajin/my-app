import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {loginUserData} from "../../Redux/auth-reducer";
import {usersAPI} from "../../Redux/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.loginUserData(id, email, login)
            }
        });
    }


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        nickname: state.auth.login,
        userId: state.auth.id
    }
}

export default connect(mapStateToProps, {
    loginUserData
})(HeaderContainer);