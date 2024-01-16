import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { useDispatch} from 'react-redux';
import { useContacts } from '../../redux/hooks';
import {addContact} from '../../redux/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  ContactForm,
  ContactInput,
  ContactLabel,
  Button,
  FormError,
} from './ContactForm.styled';

// validation schema, валідація форм, схоже як валідація пропсів (library PropTypes)
// посилання на обєкт schema кладемо у Formik на спеціальний проп validationSchema
const schema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  number: Yup.string().required('Enter telephone number'),
});

// this is state for Formik, which is under the hood
const initialValues = {
  name: '',
  number: '',
};

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const handleSubmit = (values,{ resetForm }) => {
    const {name, number} = values;
    const isAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isAdded) {
      Notify.info(`${name} is already in contacts.`);
      return false;
    } else {
      dispatch(addContact({"name": name, "number": number}));
      Notify.info(`${name} has been added to your Phonebook.`);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <ContactForm autoComplete="off">
        <ContactLabel htmlFor="name">
          Name
          <ContactInput
            type="text"
            name="name"
            placeholder="first name and surname"
          />
          <FormError name="name" component="p" />
        </ContactLabel>

        <ContactLabel htmlFor="number">
          Number
          <ContactInput
            type="tel"
            name="number"
            placeholder="telephone number"
          />
          <FormError name="number" component="p" />
        </ContactLabel>

        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
