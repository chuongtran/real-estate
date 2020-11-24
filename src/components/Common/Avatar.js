/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  border-radius: 50%; 
`;

export const Avatar = ({ src, ...rest }) => {
  return (
    <Image src={src} {...rest} />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
};
Avatar.defaultProps = {
  src: '/ic_avatar-default.png',
};

export default Avatar;
