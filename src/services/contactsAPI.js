import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fb84b54e024687bf7a033a.mockapi.io/',
});

const getContacts = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};

const createContact = async contact => {
  const response = await instance.post('/contacts', contact);
  return response.data;
};

const removeContact = async contactId => {
  const response = await instance.delete(`/contacts/${contactId}`);
  return response.data;
};

const contactsAPI = {
  getContacts,
  createContact,
  removeContact,
};

export default contactsAPI;