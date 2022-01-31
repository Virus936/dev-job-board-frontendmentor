import { createSlice } from '@reduxjs/toolkit'


export const darkSlice = createSlice({
  name: 'dark',
  initialState: {
    value: false,
  },
  reducers: {
    darktoggle: (state) => { state.value= !state.value },
    setDark: state => { state.value = true },
    setLight:state => { state.value = false },
  },
})

export const {darktoggle, setDark,setLight} = darkSlice.actions

export default darkSlice.reducer
