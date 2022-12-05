import PropTypes from 'prop-types';
import { ContactsList, ContactsItem } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redax/operation';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  // selectContacts,
  // selectFilter,
  selectVisibleContacts,
} from '../../redax/selectors';

import Button from '@mui/material/Button';

export const Contacts = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // console.log('contacts:', contacts);
  const dispatch = useDispatch();

  const visible = useSelector(selectVisibleContacts);

  const handeleDelete = id => {
    dispatch(deleteContact(id));
  };

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

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
