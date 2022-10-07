import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addNewContact, deleteNewContact } from './operations';
// const contactsList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteNewContact.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteNewContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [deleteNewContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addNewContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addNewContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.unshift(action.payload);
    },
    [addNewContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
