import { configureStore } from "@reduxjs/toolkit";
import LikeReducer from "./LikeSlice";

export default configureStore({
  reducer:{
    likes:LikeReducer
  }
})