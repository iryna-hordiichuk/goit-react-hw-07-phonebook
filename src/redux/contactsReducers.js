const fetchContactsFulfilled = (state, action) => {
  state.items = action.payload;
};

const addContactFulfilled = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactFulfilled = (state, action) => {
  const index = state.items.findIndex(contact => contact === action.payload.id);
  state.items.splice(index, 1);
};

const anyPending = state => {
  state.isLoading = true;
};
const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const reducers = {
  fetchContactsFulfilled,
  addContactFulfilled,
  deleteContactFulfilled,
  anyPending,
  anyFulfilled,
  anyRejected,
};

export default reducers;
