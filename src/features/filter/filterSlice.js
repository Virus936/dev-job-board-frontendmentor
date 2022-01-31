import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: {
      location:'',
      fulltime:false,
      name:''
    },
  },
  reducers: {
    name: (state, action) => {
      state.value.name = action.payload
    },
    location: (state, action) => {
      state.value.location = action.payload
    },
    fulltimetoggle: (state) => {
      state.value.fulltime = !state.value.fulltime
    },
  },
})

export const {name, location, fulltimetoggle} = filterSlice.actions

export default filterSlice.reducer
