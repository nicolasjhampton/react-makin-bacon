import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Cookies from "js-cookie";

import store from "./store";

// Containers
import { Login } from "./containers";

// Routes
import { Authenticated, AuthSwitch } from "./routes";

// Components
// import {} from "./components";

class App extends Component {
    render() {
        console.log(JSON.parse(Cookies.get("auth")));
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <p />
                        <h1>Hello World</h1>
                        <Login />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
