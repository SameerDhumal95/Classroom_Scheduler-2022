import { combineReducers } from "@reduxjs/toolkit";
import { adminReducer } from "./adminReducer";

export const reducers = combineReducers({
  adminLogin: adminReducer,
});
