/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from 'components/Common';
import React from 'react';
import styled from 'styled-components';
import SubscribeForm from './SubscribeForm';

const StyledFooter = styled.div`
  background-color: #24324A;
  padding: 80px 0 0;
  line-height: 30px;
  margin-top: 80px;

  * {
    color: #8A99B3;
  }

  h3 {
    color: #fff;
    margin-bottom: 30px;  
    font-size: 18px;
  }

  p {
    max-width: 285px;
    line-height: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

const Col = styled.div`
  margin-right: 90px;
  &:last-child {
    margin-right: 0;
  }
`;

const CopyRight = styled.div`
  color: #8A99B3;
  background-color: #1D293E;
  line-height: 110px;
  margin-top: 80px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="flex">
          <Col>
            <h3>About Site</h3>
            <p>
              We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.
            </p>
          </Col>
          <Col>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">User’s Guide</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Press Info</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h3>&nbsp;</h3>
            <ul>
              <li>nhatndm1193@gmail.com</li>
              <li>Blk 211, Ang Mo Kio</li>
              <li>560211, Singapore.</li>
              <li>+65 - 8455-9334</li>
              <li>+84 - 985-47-57-97</li>
            </ul>
          </Col>
          <Col>
            <h3>Subscribe</h3>
            <SubscribeForm />
          </Col>
        </div>
      </Container>
      <CopyRight>
        © 2020 Nhat Nguyen. Made with love.
      </CopyRight>
    </StyledFooter>
  );

};

export default Footer;
