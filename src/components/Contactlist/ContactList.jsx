import {useContacts, useFilter} from "../../redux/hooks";
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useContacts();
  console.log(contacts);
  const filter = useFilter();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <List>
      {visibleContacts.map(({id, name,number} )=> (
        <ContactItem key={id} name={name} number={number} id={id}/>
      ))}
    </List>
  );
};
