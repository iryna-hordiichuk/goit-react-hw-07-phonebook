import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './selectors';

export const useContacts = () => {
  return useSelector(selectContacts);
};

export const useFilter = () => {
  return useSelector(selectFilter);
};

// When you pass an anonymous function as the argument to useSelector, a new function is created each time the component re-renders. 
// On the other hand, when you pass a reference to a named function, that function is created only once (typically during the component's initialization), and the same function reference is used in subsequent re-renders. This can be more efficient in terms of performance because the selector function is not recreated every time the component re-renders.