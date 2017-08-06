import { combineReducers } from "redux";

import auth from "./auth";
import user from "./users";

const rootReducer = combineReducers({
    user,
    auth
});

export { rootReducer };
