/**
 * Created by ea375w on 7/17/2017.
 */
import React from "react";

import PropTypes from "prop-types";

import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {Provider} from "react-redux"


import Home from "./Components/common/HomePage";
import About from "./Components/common/About";
import Event from "./containers/Event";
import Profile from "./containers/Profile";
import App from "./Components/App";


const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <Route path="event" component={Event}> </Route>
                <Route path="profile" component={Profile}> </Route>
            </Route>

        </Router>
    </Provider>
);


Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;

//
// (
//     <Provider>
//         <Route path="/" component={App}>
//             <IndexRoute  component={Home}> </IndexRoute>IndexRoute>
//             <Route path="/about" component={About}> </Route>
//             <Route path="/books" component={Book}> </Route>
//         </Route>
//     </Provider>
// );
