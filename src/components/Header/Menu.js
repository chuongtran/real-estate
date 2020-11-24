import React from 'react';
import classnames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from 'constants/Styles';

const StyledMenu = styled.ul`
  li {
    margin-left: 20px;
    list-style: none;
    a {
      font-size: 15px;
      color: #000;
      text-decoration: none;
      font-weight: 700;
    }

    &.active {
      a {
        color: ${COLORS.RED};
      }
    }
  }

`;

const menuItems = [
  {
    path: '/properties',
    label: 'Listing',
  },
  {
    path: '/contact',
    label: 'Contact us',
  },
  {
    path: '/login',
    label: 'Login / Register',
    // active: true,
  },
];
const Menu = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <StyledMenu className="flex align-items-center">
      {menuItems.map((item) => (
        <li
          key={item.path}
          className={classnames({
            active: pathname === item.path || item.active,
          })}
        >
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}

    </StyledMenu>
  )
};

export default Menu;
