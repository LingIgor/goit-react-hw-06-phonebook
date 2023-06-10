import React from 'react';

import { Label, Input } from 'components/ContactsForm/ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'components/redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Label>
      <h3>Find contacts by name</h3>
      <Input onChange={onChangeFilter} name="filter" />
    </Label>
  );
};
