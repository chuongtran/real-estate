import React, { useState } from 'react';
import { Box, Container, Button } from 'components/Common';
import styled from 'styled-components';
import HeaderSearchForm from './HeaderSearchForm';
import { useHistory } from 'react-router';
import { decamelize } from 'utils/parsers';

const HomeHeaderBackground = '/bg_home-header.png';

const StyledHeader = styled.div`
  position: relative;
  // top: 0;
  // left: 0;
  // right: 0;
  height: 100vh;
  color: #fff;
  background-image: url(${HomeHeaderBackground});
  background-attachment: fixed;
  background-size: cover;
  background-position: top center;

  & > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(88, 78, 78, 0.5);
  }

  h2 {
    font-size: 55px;
    font-weight: 700;
  }
`;

const HomeHeader = () => {
  const [propertyPurpose, setPropertyPurpose] = useState('rent');
  const history = useHistory();

  const onSubmit = (params) => {
    history.push({
      pathname: '/properties',
      search: `?${new URLSearchParams(decamelize({ ...params, propertyPurpose })).toString()}`,
    });
  };

  return (
    <StyledHeader className="text-center flex flex--column align-items-center justify-content-center">
      <h2 style={{ color: "#fff" }}>Find Your Dream Home</h2>
      <div className="mt-3 mb-8">
        <b className="text--size-18">From as low as $10 per day with limited time offer discounts.</b>
      </div>
      <Container>
        <div className="mb-6">
          <Button color={propertyPurpose === 'buy' ? 'red' : null} onClick={() => setPropertyPurpose('buy')} className="mr-4">
            <b>Buy</b>
          </Button>
          <Button color={propertyPurpose === 'rent' ? 'red' : null} onClick={() => setPropertyPurpose('rent')}>
            <b>Rent</b>
          </Button>
        </div>
        <Box style={{ width: '100%' }}>
          <HeaderSearchForm onSubmit={onSubmit} />
        </Box>
      </Container>
    </StyledHeader>
  );;


};

export default HomeHeader;
