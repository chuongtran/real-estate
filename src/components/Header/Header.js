/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { IconLogo, Spacing } from 'components/Common';
import Menu from './Menu';
import { useHistory } from 'react-router';

const StyledHeader = styled.div`
  padding: 20px 50px 20px;
`;

const Header = () => {
  const history = useHistory();
  return (
    <StyledHeader id="header">
      <div className="flex align-items-center justify-content-space-between">
        <div onClick={() => history.push('/')}>
          <IconLogo />
        </div>
        <Menu />
      </div>
      <Spacing />
    </StyledHeader>
  );
};

export default Header;
