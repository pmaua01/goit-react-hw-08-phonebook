import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, ContactsButton } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redax/operation';

import {
  // selectContacts,
  // selectFilter,
  selectVisibleContacts,
} from '../../redax/selectors';

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
            <ContactsButton
              id={contact.id}
              type="button"
              onClick={() => handeleDelete(contact.id)}
            >
              Delete
            </ContactsButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
