import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    increment: state => {
     
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
   
  }
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer