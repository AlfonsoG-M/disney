import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myList: JSON.parse( localStorage.getItem("favsMovies" )) || [],
}

export const favSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addMovie: (state, action)=>{
        state.myList = [...state.myList, action.payload]
        localStorage.setItem("favsMovies", JSON.stringify(state.myList))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addMovie } = favSlice.actions

export default favSlice.reducer