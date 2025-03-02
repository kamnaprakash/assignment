import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    leavingFrom: '',
    goingTo: '',
    checkIn: '',
    checkOut: '',
    passengers: 1,
    tripType: 'Round trip',
    isSuggestionsVisible: false, // New state variable
  },
  reducers: {
    updateSearch: (state, action) => {
      return { ...state, ...action.payload };
    },
    showSuggestions: (state) => {
      state.isSuggestionsVisible = true;
    },
    hideSuggestions: (state) => {
      state.isSuggestionsVisible = false;
    },
  },
});

export const { updateSearch, showSuggestions, hideSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
