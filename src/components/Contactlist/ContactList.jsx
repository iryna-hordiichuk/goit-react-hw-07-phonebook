import { useContacts, useFilter } from '../../redux/hooks';
import { useEffect } from 'react';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const ContactList = () => {
  const { items, isLoading, error } = useContacts();
  console.log(isLoading);
  const filter = useFilter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.trim().toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
    {isLoading && Loading.standard('... Loading')}
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
    </>
  );
};
