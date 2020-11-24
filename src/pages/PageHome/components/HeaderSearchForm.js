import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Input, Select } from 'components/Common';
import { PROPERTY_TYPES } from 'constants/property.constants';

const ROOMS = [1, 2, 3, 4, 5];

const FilterForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [propertyType, setType] = useState('');
  const [bathRooms, setBathRooms] = useState('');
  const [bedRooms, setBedRooms] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      query, propertyType, bathRooms, bedRooms
    };
    onSubmit(params);
  }

  return (
    <Box>
      <form onSubmit={handleSubmit} className="flex flex--wrap" action="">
        <div className="mr-4 flex--1">
          <Input name="query" value={query} onChange={e => setQuery(e.target.value)} height="50" placeholder="Enter keyword..." />
        </div>
        <div className="mr-4 flex--1">
          <Select block name="propertyType" options={PROPERTY_TYPES} onChange={setType} value={propertyType} placeholder="Property Type" />
        </div>
        <div className="mr-4 flex--1">
          <Select block name="bath_rooms" options={ROOMS} onChange={setBathRooms} value={bathRooms} placeholder="Bath rooms" />
        </div>
        <div className="mr-4 flex--1">
          <Select block name="bed_rooms" options={ROOMS} onChange={setBedRooms} value={bedRooms} placeholder="Bed rooms" />
        </div>
        <div className="mr-4">
          <Button color="red" className="">
            <b className="text--size-15">Search</b>
          </Button>
        </div>
      </form>
    </Box>
  );
};

FilterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FilterForm;
