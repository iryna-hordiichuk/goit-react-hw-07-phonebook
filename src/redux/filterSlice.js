import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

// in setFilter uses assignment - mutable approach, Immer will update immutably under the hood
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
