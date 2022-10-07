import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://633dba1df2b0e623dc7a4d7c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const r = await axios.get('/contacts');
      // if (!r.ok) {
      //   throw new Error('server error');
      // }
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const r = await axios.post('/contacts', { text });
      // if (!r.ok) {
      //   throw new Error("can't add contact.server error");
      // }
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteNewContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const r = await axios.delete(`/contacts/${id}`);
      // if (!r.ok) {
      //   throw new Error("can't delete contact.server error");
      // }
      // dispatch(removeTodo({ id }));
      return r.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
