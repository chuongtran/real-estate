import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.span`
  width: 50%;
  max-width: 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  flex: auto;

  &::before {
    content: "";
    display: block;
    padding-top: 60%;
  }
`;


const Gallery = ({ images }) => {
  if (!images || !images[0]) return null;
  const firstImage = images[0];
  const restImages = images.slice(1);
  return (
    <StyledWrapper>
      <Image isFirst src={firstImage.url} />
      <StyledWrapper className="flex--1">
        {restImages.map((img, index) => <Image key={index} src={img.url} />)}
      </StyledWrapper>
    </StyledWrapper>
  )
};

Gallery.propTypes = {
  images: PropTypes.array,
};

Gallery.defaultProps = {
  images: [],
};

export default Gallery;
