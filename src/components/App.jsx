import { Phonebook } from './Phonebook/Phonebook';

import { Container, Label } from './App.styled';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useState } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const { data } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  let filteredContacts = [];

  //! delete a contact from state
  const onDeleteContact = id => {};

  //! set filter from input field
  const onInputChangeFilter = e => {
    setFilter(e.target.value.trim());
  };

  //! filtered contacts by name
  if (data) {
    filteredContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Phonebook contacts={data} />
      <h2>Contacts</h2>
      {/* show search input if contacts isn't empty */}
      {data?.length === 0 ? (
        <p>Empty</p>
      ) : (
        <div>
          <Label>
            <p>Search by contact</p>
            <input
              type="text"
              placeholder="Enter search contact"
              value={filter}
              onChange={onInputChangeFilter}
            />
          </Label>
          <Contacts
            contacts={filteredContacts ?? data}
            onDeleteContact={onDeleteContact}
          />
        </div>
      )}
    </Container>
  );
};
