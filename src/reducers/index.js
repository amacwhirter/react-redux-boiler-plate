/**
 * Created by ea375w on 7/17/2017.
 */

import React from "react";
import {combineReducers} from "redux";

import books from "./bookReducers";

const allReducers =  combineReducers({
    books: books

    // More reducers if there are
    // can go here.
});


export default allReducers;