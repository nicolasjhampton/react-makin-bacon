import { authActionTypes } from "../actionTypes";

export function logOut() {
    return {
        type: authActionTypes.LOG_OUT_USER,
        authentication: null
    };
}

export function authenticated() {
    return {
        type: authActionTypes.USER_AUTHENTICATED
    };
}
