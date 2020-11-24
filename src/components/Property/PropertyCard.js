/* eslint-disable no-unused-vars */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, IconHeart, IconPin, Spacing, Avatar } from 'components/Common';
import { capitalize } from 'lodash';
import { COLORS } from 'constants/Styles';
import { useHistory } from 'react-router';

const StyledCard = styled.div`
  width: 100%;
  padding: 11px;
  background-color: #fff;
  border: 1px solid ${COLORS.GRAY_BORDER};
  border-radius: 8px;
`;

const Thumbnail = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 338px;
  height: 216px;
  position: relative;
  max-width: 100%;
`;

const Details = styled.div`
  padding: 11px;
`;

const Categories = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
`;

const Price = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: #fff;
  font-weight: 700;
  b {
    font-size: 22px;
  }
`;

const Love = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;

const PropertyCard = ({ property }) => {
  const history = useHistory();
  return (
    <StyledCard>
      <Thumbnail src={property.thumbnail}>
        <Categories>
          <Label>
            For&nbsp;
            {capitalize(property.propertyPurpose)}
          </Label>
          <Label className="ml-3" active>Featured</Label>
        </Categories>
        <Price>
          <b>$13,000</b>
          <span>/mo</span>
        </Price>
        <Love>
          <IconHeart />
        </Love>
      </Thumbnail>
      <Spacing spacing={2} />
      <Details>
        <span className="text--red text--size-13">
          {property.propertyType}
        </span>
        <h4 className="text--size-18 mt-2 pointer" onClick={() => history.push(`/properties/${property.id}`)}>
          {property.name}
        </h4>
        <div className="mt-2 mb-3 flex align-items-center">
          <span className="mr-1">
            <IconPin />
          </span>
          {property.address}
        </div>
        <div className="mb-9 flex align-items-center justify-content-space-between">
          <span>
            Beds:&nbsp;
            {property.propertyDetail.bedRooms}
          </span>
          <span>
            Baths:&nbsp;
            {property.propertyDetail.bathRooms}
          </span>
          <span>
            Sq Ft:&nbsp;
            {property.propertyDetail.area}
          </span>
          <span />
        </div>
        <div className="flex align-items-center justify-content-space-between">
          <div className="flex align-items-center">
            <Avatar src={property.createdBy.avatar} />
            <span className="ml-3">{property.createdBy.fullName}</span>
          </div>
          <span>
            {moment(property.createdAt).fromNow()}
          </span>
        </div>
      </Details>
    </StyledCard>
  )
};

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};
export default PropertyCard;
