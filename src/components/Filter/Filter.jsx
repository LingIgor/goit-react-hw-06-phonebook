import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from 'components/ContactsForm/ContactsForm.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      <h3>Find contacts by name</h3>
      <Input onChange={onFilter} value={value} name="filter" />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
