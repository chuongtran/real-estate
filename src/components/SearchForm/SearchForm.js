import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PropertyFiltersContainer, { PropertyFilterFields } from 'components/PropertyFilters/PropertyFiltersContainer';
import { ALL_FIELDS } from 'components/PropertyFilters/PropertyFilters.constants';
import { Box, Button } from 'components/Common';

const SearchForm = ({ onSubmit }) => {
  const { filterParams } = useContext(PropertyFiltersContainer.Context);
  return (
    <Box>
      <PropertyFilterFields fields={ALL_FIELDS} fieldClassName="mb-5" />
      <Button color="red" style={{ width: '100%' }} onClick={() => onSubmit(filterParams)}>
        <b className="text--size-20">Search</b>
      </Button>
    </Box>
  );

};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
