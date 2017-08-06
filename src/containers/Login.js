import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActions } from "../actions";

import styled, { css } from "styled-components";

const component = props =>
    <a className={props.className} href="https://localhost:3000/auth">
        Login with Google
    </a>;

const Button = styled(component)`
        border-radius: 3px;
        padding: 0.25em 1em;
        margin: 0 1em;
        background: transparent;
        color: palevioletred;
        border: 2px solid palevioletred;

    ${props =>
        props.primary &&
        css`   
            background: palevioletred;
            color: white;
    `};
`;

// const mapStateToProps = state => ({ ...state });

// const mapDispatchToProps = dispatch =>
//     bindActionCreators(
//         {
//             logIn: () => userActions.fetchUser()
//         },
//         dispatch
//     );

export default Button;
