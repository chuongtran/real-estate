import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';

const DetailItem = styled.div`
  width: 30%;
  height: 40px;
  font-size: 13px;
  span {
    width: 100px;
    display: inline-block;
  }
`;

const fields = [
  {
    label: 'Property ID',
    field: 'id',
  },
  {
    label: 'Property Type',
    field: 'propertyType',
  },
  {
    label: 'Bedrooms',
    field: 'propertyDetail.bedRooms',
  },
  {
    label: 'Price',
    field: '',
  },
  {
    label: 'Bathrooms',
    field: 'propertyDetail.bathRooms',
  },
  {
    label: 'Property Status',
    field: 'status',
  },
  {
    label: 'Property Size',
    field: 'propertyDetail.area',
    render: (property) => `${property.propertyDetail.area} Sq Ft`
  },
];

const Details = ({ property }) => {
  return (
    <div className="flex flex--wrap" style={{ width: '100%' }}>
      {
        fields.map((field) => (
          <DetailItem key={field.field}>
            <span>
              {field.label}
              :
            </span>
            {typeof field.render === 'function' ? field.render(property) : get(property, field.field)}
          </DetailItem>
        ))
      }
    </div>
  )
};

Details.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Details;
