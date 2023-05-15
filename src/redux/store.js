//// burası redux store kayıt yeri
import authReducer from "./slice/authSlice"
import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { ReactReduxContext } from "react-redux"
import React from "react"

// reducer ları ekleyceğimiz yer
const rootReducer=combineReducers({
    auth: authReducer,
})


//burda reducer lar store a kaydediliyor
const store=configureStore({
    reducer:rootReducer
})



export default store