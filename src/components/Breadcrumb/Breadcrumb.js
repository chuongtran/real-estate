import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  font-weight: bold;

  & > * {
    &::after {
      content: "/";
      padding: 0 10px;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`;

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <Wrapper>
      {breadcrumbs
        .map((item, itemIndex) => {
          if (itemIndex < breadcrumbs.length -1) {
            return <Link key={item.path} to={item.path}>{item.label}</Link>
          }
          return <span key={item.path} className="text--red">{item.label}</span>
        })}
    </Wrapper>
  );

};

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

export default Breadcrumb;
