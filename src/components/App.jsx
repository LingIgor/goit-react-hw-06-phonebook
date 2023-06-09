import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactsForm/ContactsFrom';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Section } from './App/App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('try')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(
    prevState => {
      if (prevState !== contacts) {
        const localString = JSON.stringify(contacts);
        window.localStorage.setItem('try', localString);
      }
    },
    [contacts]
  );

  const onHandleSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(el => name === el.name))
      alert(`${name} is already in contacts`);
    setContacts([newContact, ...contacts]);
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(el => el.id !== contactId));
  };

  const visible = visibleContacts();
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onHandleSubmit} />
      <Filter onFilter={onChangeFilter} value={filter} />
      <h2>Contacts</h2>
      <ContactList deleteContact={deleteContact} contacts={visible} />
    </Section>
  );
};
