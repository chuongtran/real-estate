/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { Container, Section, SectionSubtitle, SectionTitle } from 'components/Common';

const StyledBox = styled.div`
  position: relative;
  border-radius: 8px;
  background-image: url(${props => props.src});
  width: 360px;
  height: 349px;
  overflow: hidden;
  margin-bottom: 30px;

  & > * {
    position: relative;
    z-index: 2;
  }

  & > div {
    position: absolute;
    font-weight: 700;
    bottom: 30px;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    b {
      display: block;
      margin-bottom: 7px; 
      font-size: 18px;
    }
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

  &:nth-of-type(2), &:nth-of-type(3) {
    flex: 1;
    min-width: calc(100% - 390px);
    max-width: calc(100% - 390px);
  }
`;

const Cities = () => {
  return (
    <Section>
      <SectionTitle>Find Properties in These Cities</SectionTitle>
      <SectionSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SectionSubtitle>
      <Container className="mt-10">
        <div className="flex flex--wrap justify-content-space-between">
          <StyledBox src="/img_city-1.png">
            <div>
              <b>Miami</b>
              <span>
                24 Properties
              </span>
            </div>
          </StyledBox>
          <StyledBox src="/img_city-2.png">
            <div>
              <b>Los Angeles</b>
              <span>
                24 Properties
              </span>
            </div>
          </StyledBox>
          <StyledBox src="/img_city-3.png">
            <div>
              <b>Los Angeles</b>
              <span>
                24 Properties
              </span>
            </div>
          </StyledBox>
          <StyledBox src="/img_city-4.png">
            <div>
              <b>Los Angeles</b>
              <span>
                24 Properties
              </span>
            </div>
          </StyledBox>
        </div>
      </Container>
    </Section>
  )
};

export default Cities;
