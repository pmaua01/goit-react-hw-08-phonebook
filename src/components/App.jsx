import React from 'react';
// import shortid from 'shortid';
import { Phonebook } from 'components/Phonebook/Phonebook';

import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, selectIsLoading, selectError } from 'redax/selectors';
import { fetchContacts } from 'redax/operation';

// import { useState, useEffect } from 'react';
export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch(selectError);

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
};
