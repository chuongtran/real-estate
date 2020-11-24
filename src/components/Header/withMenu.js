/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Menu from './Menu';

const withMenu = (WrappedComponent) => (props) => {
  return (
    <div>
      <Menu />
      <WrappedComponent {...props} />
    </div>
  );
};

export default withMenu;
