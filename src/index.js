/**
 * Created by ea375w on 7/17/2017.
 */
import "babel-polyfill";
import React from "react";

import ReactDOM from "react-dom";


import Routes from "./routes";

import {createStore, compose} from "redux";

import Reducers from "./reducers/index";


var enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(Reducers, enhancers);


var app = document.getElementById("app");

ReactDOM.render(<Routes store = {store} />, app
);

if(module.hot){
    module.hot.accept();
}