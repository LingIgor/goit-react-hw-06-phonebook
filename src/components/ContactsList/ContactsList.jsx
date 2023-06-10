import React from 'react';
import { Item, List, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/ContactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter);
  console.log(filter);
  const dispatch = useDispatch();

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visible = getVisibleContacts();

  return (
    <List>
      {visible.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => delContact(id)}>
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
