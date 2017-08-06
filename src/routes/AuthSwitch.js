import React from "react";
import { Switch, Redirect, withRouter } from "react-router-dom";
import Authenticated from "./Authenticated";

const AuthSwitch = props => {
    return (
        <Authenticated LoggedIn={props.LoggedIn}>
            <Switch>
                {props.children}
                <Redirect to="/" />
            </Switch>
        </Authenticated>
    );
};

const mapStateToProps = state => ({ ...state });

export default withRouter(AuthSwitch);
