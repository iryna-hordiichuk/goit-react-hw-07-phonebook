import {useDispatch} from "react-redux";
import { deleteContact } from "../../redux/operations";// 
import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';


export const ContactItem = ({ id, name, number}) => {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <Button
        type="button"
        onClick={()=> dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
