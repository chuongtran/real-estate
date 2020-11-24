/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconStar } from 'components/Common';
import { COLORS } from 'constants/Styles';

const STARS = [1, 2, 3, 4, 5];

const Star = styled.div`
  cursor: pointer;
  path {
    fill: ${props => props.active ? COLORS.YELLOW : COLORS.TEXT};
  }
`;
const Stars = ({ points, onChange }) => {
  return (
    <div className="flex">
      {STARS.map((star) => (
        <Star key={star} active={star <= points} onClick={() => onChange(star)}>
          <IconStar />
        </Star>
      ))}
    </div>
  )
};

Stars.propTypes = {
  points: PropTypes.number,
  onChange: PropTypes.func,
};
Stars.defaultProps = {
  points: 0,
  onChange: () => {},
};
export default Stars;
