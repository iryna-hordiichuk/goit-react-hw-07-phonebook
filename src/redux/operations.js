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
    async ({name, number}, thunkAPI) => {
      try {
        const response = await contactsAPI.createContact({name, number});
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
  
