import PropTypes from 'prop-types';
import { ContactsList, ContactsItem } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redax/contacts/operation';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectVisibleContacts } from '../../redax/contacts/selectors';
import Button from '@mui/material/Button';

export const Contacts = () => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisibleContacts);
  const handeleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsList>
      {visible.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            {contact.name}:{contact.number}
            <Button
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              variant="contained"
              id={contact.id}
              type="button"
              onClick={() => handeleDelete(contact.id)}
            >
              Delete
            </Button>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
