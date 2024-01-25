import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import reducers from './contactsReducers';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

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
      .addCase(fetchContacts.fulfilled, reducers.fetchContactsFulfilled)
      .addCase(addContact.fulfilled, reducers.addContactFulfilled)
      .addCase(deleteContact.fulfilled, reducers.deleteContactFulfilled)
      .addMatcher(isAnyOf(getActions('pending')), reducers.anyPending)
      .addMatcher(isAnyOf(getActions('fulfilled')), reducers.anyFulfilled)
      .addMatcher(isAnyOf(getActions('rejected')), reducers.anyRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// метод addMatcher - это возможность добавить какое-то кастомное условие
// метчеры добавляются всегда вконце.
// мепнули и вернули все которые пендинг (или реджектед, фулфиллед - что нужно)
// расспыление нужно для того, чтобы передать, то что возвращает меп как отдельные аргументы функции
//! елементы массива расспылились в аргументы, передали их как отдельные аргументы функции

// тут білдер іде як словник: екшн(термін)- хто обробляє (визначення)
