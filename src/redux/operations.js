import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://633dba1df2b0e623dc7a4d7c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const r = await axios.get('/contacts');
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const r = await axios.post('/contacts', { text });
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const r = await axios.delete(`/contacts/${contactId}`);
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
