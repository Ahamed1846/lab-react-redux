import { createSlice } from "@reduxjs/toolkit";

export const LikeSlice = createSlice({
  name: 'likes',
  initialState:{
    value:0
  },
  reducers:{
    increment: (state) =>{
      state.value += 1
    },
    decrement: (state) =>{
      state.value -=1
    }
  }
})

export const {increment,decrement} = LikeSlice.actions;
export default LikeSlice.reducer;