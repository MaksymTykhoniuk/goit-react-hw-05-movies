import { useState } from 'react';
import {
  Form,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './SearchBox.styled';
import PropTypes from 'prop-types';
import { MdImageSearch } from 'react-icons/md';

export const SearchBox = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;

    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Search query can not be empty.');
      return;
    }
    onSubmit(inputValue);
    clearForm();
  };

  const clearForm = () => {
    setInputValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>
          <MdImageSearch size="30px" fill="#a01d1d" />
        </SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        onChange={handleInputChange}
        value={inputValue}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films in database"
      />
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
