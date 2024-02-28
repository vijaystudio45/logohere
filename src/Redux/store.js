import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  VerifyEmailReducer,
  ChangePasswordReducer,
  ForgotPasswordReducer,
  SetForgotPassworRedcuer,
  EditRegisterDataReducer,
} from "./reducers/AuthReducer";

import { CountryDataReducer } from "./reducers/CountryReducer";

const reducer = combineReducers({
  authReducer: LoginReducer,
  RegisterReducer,
  VerifyEmailReducer,
  ChangePasswordReducer,
  ForgotPasswordReducer,
  SetForgotPassworRedcuer,
  EditRegisterDataReducer,
  CountryDataReducer,
});

const userDataLocal = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const initialState = {
  authReducer: { userData: userDataLocal },
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
