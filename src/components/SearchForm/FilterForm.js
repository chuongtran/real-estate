import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Button, IconFilter, IconSearch } from 'components/Common';
import { COLORS } from 'constants/Styles';
import AdvancedSearchForm from './AdvancedSearchForm';
import PropertyFiltersContainer, { PropertyFilterFields } from 'components/PropertyFilters/PropertyFiltersContainer';
import { BATH_ROOMS, BED_ROOMS, PROPERTY_TYPE, STATUS, WARD } from 'components/PropertyFilters/PropertyFilters.constants';

const FilterButton = styled(Button)`
  position: relative;
  overflow: hidden;
  padding-left: 56px;
  & > span {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #CB181D;
    width: 46px;
  }
`;

const StyledButton = styled(Button)`
  height: 34px;
  border: 1px solid ${COLORS.RED};
  minWidth: 100px;
  color: ${props => props.color === 'red' ? '#fff' : COLORS.RED};
`;

const StyledForm = styled.form`
  & > div {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const FilterForm = ({ onSearch }) => {
  const {filterParams, updateFilterParams} = useContext(PropertyFiltersContainer.Context);
  const [padOpened, setPadOpened] = useState(false);

  const {
    propertyPurpose
  } = useMemo(() => filterParams, [filterParams]);

  const onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    // Do Search!
    onSearch(filterParams);
  }

  const onAdvancedSubmit = () => {
    onSubmit();
  };

  return (
    <>
      <div className="mb-5">
        <StyledButton color={propertyPurpose === 'buy' ? 'red' : null} onClick={() => updateFilterParams({ propertyPurpose: 'buy' })} className="mr-3">
          <b>Buy</b>
        </StyledButton>
        <StyledButton color={propertyPurpose === 'rent' ? 'red' : null} onClick={() => updateFilterParams({ propertyPurpose: 'rent' })}>
          <b>Rent</b>
        </StyledButton>
      </div>
      <Box>
        <StyledForm onSubmit={onSubmit} className="flex flex--wrap">
          <PropertyFilterFields fields={[WARD, STATUS, PROPERTY_TYPE, BATH_ROOMS, BED_ROOMS]} />
          <div>
            <Button color="red" className="flex align-items-center">
              <IconSearch />
                &nbsp;
              <b className="text--size-15">Search</b>
            </Button>
          </div>
          <FilterButton color="red" onClick={() => setPadOpened(true)}>
            <span className="flex align-items-center justify-content-center">
              <IconFilter />
            </span>
            <b className="text--size-15">More filter</b>
          </FilterButton>
        </StyledForm>
      </Box>
      <AdvancedSearchForm visible={padOpened} onClose={() => setPadOpened(false)} params={filterParams} onSubmit={onAdvancedSubmit} />
    </>
  );
};

FilterForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default FilterForm;
