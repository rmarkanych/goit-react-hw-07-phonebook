import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, deleteNewContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
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
    [deleteNewContact.pending]: state => {
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
      state.items.push(action.payload);
    },
    [addNewContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
