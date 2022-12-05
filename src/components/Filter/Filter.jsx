import PropTypes from 'prop-types';
import React from 'react';
import { FilterLabel } from './Filer.styles';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redax/filterContactSlice';

import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filtersValue = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const onHandleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      <TextField
        label="Find contacts by Name"
        variant="outlined"
        type="text"
        value={filtersValue}
        onChange={onHandleChange}
      ></TextField>
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
