import React from "react";
import {connect} from "react-redux";
import Login from "./Login";

let mapStateToProps = (state) => {
    return {

    }
}

const LoginContainer = connect(mapStateToProps)(Login)

export default LoginContainer