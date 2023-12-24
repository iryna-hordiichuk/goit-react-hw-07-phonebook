import { useSelector } from 'react-redux';

export const useContacts = () => {
  return useSelector(state => state.contacts);
};

export const useFilter = () => {
  return useSelector(state => state.filter);
};
