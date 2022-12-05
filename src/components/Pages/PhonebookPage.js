import { selectContacts, selectIsLoading, selectError } from 'redax/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redax/operation';

export default function PhonebookPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        width: 720,
        margin: 'auto',
        fontSize: 30,
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook></Phonebook>
      {contacts.length > 0 && <h2>Contacts</h2>}
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && <Contacts />}
    </div>
  );
}
