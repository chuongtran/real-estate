/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';
import withHeader from 'components/Header/withHeader';
import { Container, SectionSubtitle, SectionTitle } from 'components/Common';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import FilterForm from 'components/SearchForm/FilterForm';
import Maps from 'components/Map/Map';
import PropertyCard from 'components/Property/PropertyCard';
import { useLoading } from 'utils/hooks';
import { searchProperties } from 'services/Property.service';
import { useLocation } from 'react-router';
import { camelCase, isEmpty } from 'lodash';
import { Col, Row, Spin } from 'antd';
import PropertyFiltersContainer from 'components/PropertyFilters/PropertyFiltersContainer';
import { CITIES } from 'constants/places.constants';

const Column = styled.div`
  width: calc(50% - 15px);
  display: flex;
  flex-flow: column;
`;

const StyledMapWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;

  .map-canvas {
    flex: 1;
  }
`;

const BREADCRUMBS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Listing',
    path: '/listing',
  },
];
const PagePropertiesListing = () => {
  const [properties, setProperties] = useState([]);
  const [propertiesLoading, withPropertiesLoading] = useLoading();
  const {filterParams, setFilterParams} = useContext(PropertyFiltersContainer.Context);
  const location = useLocation();

  useEffect(() => {
    const params = {};
    const parsedParams = new URLSearchParams(location.search);
    for (const entry of parsedParams.entries()) {
      params[camelCase(entry[0])] = entry[1];
    }
    setFilterParams(params);
  }, [location.search]);

  const doGetProperties = async params => {
    const properties = await withPropertiesLoading(() => searchProperties(params));
    setProperties(properties);
  };
  useEffect(() => {
    if (!isEmpty(filterParams) && location.search) {
      doGetProperties(filterParams);
    }
  }, [filterParams, location.search]);

  const onSearch = filterParams => {
    doGetProperties(filterParams);
  };

  const searchResults = useMemo(() => {
    const { city, propertyType, bedRooms, bathRooms, propertyPurpose } = filterParams;
    let results = '';
    if (city) {
      const foundCity = CITIES.find(c => c.id == city);
      if (foundCity)
        results += `${foundCity.name}, `;
    }
    if (propertyType) results += `${propertyType} `;
    results += bedRooms ? `${bedRooms} bed rooms ` : `Any bed rooms `;
    results += bathRooms ? `${bathRooms} bath rooms ` : `Any bath rooms `;
    if (propertyPurpose) results += `for ${propertyPurpose }`;
    return results;
  }, [filterParams]);

  return (
    <div>
      <Container size="full">
        <Breadcrumb breadcrumbs={BREADCRUMBS} />
        <div className="flex justify-content-space-between mt-8">
          <Column>
            <FilterForm onSearch={onSearch} />
            {propertiesLoading ? <div className="text-center"><Spin /></div> : (
              <>
                <div>
                  <SectionTitle style={{ textAlign: 'left' }}>{searchResults}</SectionTitle>
                  <SectionSubtitle style={{ textAlign: 'left' }}>
                    {properties.length}
                    {' '}
                    search results
                  </SectionSubtitle>
                </div>
                <Row gutter={30}>
                  {properties.map(property => (
                    <Col sm={12} xs={24} className="mb-4" key={property.id}>
                      <PropertyCard property={property} />
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </Column>
          <Column>
            <StyledMapWrapper>
              <Maps
                zoom={13}
                markerData={properties.map(property => ({
                  name: property.name,
                  point: {
                    lat: property.lat,
                    lng: property.lng,
                  }
                }))}
              />
            </StyledMapWrapper>
          </Column>
        </div>
      </Container>
    </div>
  )
};

export default withHeader(PagePropertiesListing);
