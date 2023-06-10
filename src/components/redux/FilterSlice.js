import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, actions) {
      return actions.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
