import React from 'react';
import { ContactForm } from './ContactsForm/ContactsFrom';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { Section } from './App/App.styled';

export const App = () => {
  // const visible = visibleContacts();
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </Section>
  );
};

// contacts = { visible };
