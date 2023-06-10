import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'components/redux/ContactSlice';

import { Label, Form, Title, Input, Add } from './ContactsForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(({ contacts }) => contacts.contacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };
    if (contacts.contacts.find(({ name }) => name === contact.name)) {
      alert('sorry');
      return;
    }
    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>

      <Label htmlFor={numberInputId}>
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>
      <Add type="submit">add contact</Add>
    </Form>
  );
};
