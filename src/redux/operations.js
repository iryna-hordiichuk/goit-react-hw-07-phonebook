import { createAsyncThunk } from "@reduxjs/toolkit";
import contactsAPI from "../services/contactsAPI";


  export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
     const response  = await contactsAPI.getContacts();
     return response;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await contactsAPI.createContact(contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await contactsAPI.removeContact(contactId)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
