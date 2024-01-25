import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(contact => contact === action.payload.id);
  state.items.splice(index, 1);
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(isAnyOf(getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// метод addMatcher - это возможность добавить какое-то кастомное условие
// метчеры добавляются всегда вконце.
// мепнули и вернули все которые пендинг (или реджектед, фулфиллед - что нужно)
// расспыление нужно для того, чтобы передать, то что возвращает меп как отдельные аргументы функции
//! елементы массива расспылились в аргументы, передали их как отдельные аргументы функции
