import { conbineReducers } from "redux";
import { contactReducers } from "./contacts";


export const rootReducer = conbineReducers( {contactReducers} );