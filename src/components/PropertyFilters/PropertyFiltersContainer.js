/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { Select } from 'components/Common';

import * as filterFields from './PropertyFilters.constants';

import { PROVINCES, WARDS, CITIES } from 'constants/places.constants';
import { PROPERTY_STATUSES, PROPERTY_TYPES } from 'constants/property.constants';

const ROOMS = [1, 2, 3, 4, 5];

const PropertyFiltersContext = createContext(null);

const PropertyFiltersProvider = ({ children }) => {
  const [ filterParams, setFilterParams ] = useState({
    province: 1,
    city: '',
    ward: '',
    status: '',
    propertyType: '',
    bathRooms: '',
    bedRooms: '',
    propertyPurpose: '',
  });
  
  const updateFilterParams = useCallback(objToUpdate => {
    setFilterParams({
      ...filterParams,
      ...objToUpdate
    })
  }, [filterParams])

  return (
    <PropertyFiltersContext.Provider value={{ filterParams, setFilterParams, updateFilterParams }}>
      {children}
    </PropertyFiltersContext.Provider>
  );
};

const PropertyFiltersContainer = {
  Context: PropertyFiltersContext,
  Provider: PropertyFiltersProvider,
}
export default PropertyFiltersContainer;


export const PropertyFilterFields = ({ fields, fieldClassName }) => {
  const { filterParams, setFilterParams } = useContext(PropertyFiltersContainer.Context);
  const {
    province, city, ward, status, propertyType, bathRooms, bedRooms
  } = useMemo(() => filterParams, [filterParams]);

  const cities = useMemo(() => {
    return CITIES
      .filter((item) => item.province_id == province)
      .map((item) => ({
        value: item.id,
        label: item.name
      }));
  }, [province]);

  const wards = useMemo(() => {
    return WARDS
      .filter((item) => item.city_id == city)
      .map((item) => ({
        value: item.id,
        label: item.name
      }));
  }, [city]);

  const updateParams = (obj) => {
    setFilterParams({
      ...filterParams,
      ...obj,
    });
  }

  const renderedFields = [];
  if (fields.includes(filterFields.PROVINCE)) {
    renderedFields.push(<Select className={fieldClassName} block options={PROVINCES} onChange={province => updateParams({ province })} value={province && province.toString()} placeholder="Province" />);
  }
  if (fields.includes(filterFields.CITY)) {
    renderedFields.push(<Select className={fieldClassName} block options={cities} onChange={city => updateParams({ city })} value={city && city.toString()} placeholder="City" />);
  }
  if (fields.includes(filterFields.WARD)) {
    renderedFields.push(<Select className={fieldClassName} block options={wards} onChange={ward => updateParams({ ward })} value={ward && ward.toString()} placeholder="Ward" />);
  }
  if (fields.includes(filterFields.STATUS)) {
    renderedFields.push(<Select className={fieldClassName} block options={PROPERTY_STATUSES} onChange={status => updateParams({ status })} value={status} placeholder="Status" />);
  }
  if (fields.includes(filterFields.PROPERTY_TYPE)) {
    renderedFields.push(<Select className={fieldClassName} block options={PROPERTY_TYPES} onChange={propertyType => updateParams({ propertyType })} value={propertyType} placeholder="Property Type" />);
  }
  if (fields.includes(filterFields.BATH_ROOMS)) {
    renderedFields.push(<Select className={fieldClassName} block options={ROOMS} onChange={bathRooms => updateParams({ bathRooms })} value={bathRooms} placeholder="Bath rooms" />);
  }
  if (fields.includes(filterFields.BATH_ROOMS)) {
    renderedFields.push(<Select className={fieldClassName} block options={ROOMS} onChange={bedRooms => updateParams({ bedRooms })} value={bedRooms} placeholder="Bed rooms" />);
  }
  return renderedFields;
};
