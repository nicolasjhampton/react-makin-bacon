import React from "react";
import { connect } from "react-redux";

const Authenticated = ({ auth, LoggedIn, children }) => {
    if (!!LoggedIn == !!auth) {
        if (children) {
            return children;
        } else {
            return null;
        }
    } else {
        return null;
    }
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Authenticated);
