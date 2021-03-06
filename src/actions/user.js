//import fetch from "isomorphic-fetch";
//import { apiRoot } from "../config";
import { userActionTypes } from "../actionTypes";
//import { errorActions } from "../actions";
import { authenticated } from "./auth";
import Cookies from "js-cookie";

//const unwrapUser = ({ data }) => data[0];
// const createAuthHeader = (username, password) =>
//     `Basic ${btoa(`${username}:${password}`)}`;

// const fetchUserBound = dispatch => {
//     return (email, password) => fetchUser(email, password)(dispatch);
// };

const checkForErrors = response => {
    // if (response.status !== 201 && response.status !== 200) {
    //     return jsonErrorPromise(response);
    // }
    console.log(response.status);
    return response;
};

const jsonErrorPromise = response => {
    return new Promise((resolve, reject) => {
        response.json().then(reject);
    });
};

// const dispatchValidationError = dispatch => ({ errors }) => {
//     dispatch(errorActions.raiseValidationError(errors));
// };

/*
* GET /api/users
*/

export function requestUser() {
    return {
        type: userActionTypes.REQUEST_USER
    };
}

export function requestUserSuccess(user) {
    return {
        type: userActionTypes.REQUEST_USER_SUCCESS,
        user
    };
}

export function requestUserFailure(err) {
    return {
        type: userActionTypes.REQUEST_USER_FAILURE,
        err: err
    };
}

export function fetchUser() {
    return dispatch => {
        dispatch(requestUser());
        return (
            fetch(`https://accounts.google.com/o/oauth2/v2/auth`, {
                mode: "no-cors"
            })
                //.then(response => response.text())
                .then(response => {
                    console.log(response);
                    // if (response.redirected) {
                    //     console.log("here");
                    // }
                })
        );
    };
}

/*
* POST /api/users
*/

export function createUser() {
    return {
        type: userActionTypes.CREATE_USER
    };
}

export function createUserFailure(err) {
    return {
        type: userActionTypes.CREATE_USER_FAILURE,
        err: err
    };
}
// export function sendCreateUser(user) {
//     return dispatch => {
//         dispatch(createUser());
//         return fetch(`${apiRoot}/users`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             mode: "cors",
//             body: JSON.stringify(user)
//         })
//             .then(checkForErrors)
//             .then(() =>
//                 fetchUserBound(dispatch)(user.emailAddress, user.password)
//             )
//             .catch(dispatchValidationError(dispatch));
//     };
// }
