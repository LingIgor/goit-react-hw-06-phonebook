import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, actions) {
      state.contacts = [...state.contacts, actions.payload];
    },
    deleteContact(state, actions) {
      state.contacts = state.contacts.filter(el => el.id !== actions.payload);
      console.log(actions.payload);
      console.log(state.contacts);
    },
  },
});

export const contactReducer = contactSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;
