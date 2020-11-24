/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLORS } from 'constants/Styles';

const getColor = (color) => {
  switch (color) {
    case 'transparent':
      return 'transparent';
    case 'red':
      return COLORS.RED;
    default:
      return "#fff";
  }

}
const StyledButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  height: 50px;
  min-width: 110px;
  background-color: ${props => getColor(props.color)};
  border: 1px solid ${props => getColor(props.color)};
  color: ${props => props.color ? '#fff' : '#000'};
`;

export const Button = (props) => {
  const { saving, disabled, ...rest } = props;
  return <StyledButton disabled={disabled} saving={saving} {...rest} />;
};
Button.propTypes = {
  saving: PropTypes.bool,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  saving: false,
  disabled: false,
}