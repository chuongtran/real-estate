/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from './Header';

const withHeader = (WrappedComponent) => (props) => {
  return (
    <div>
      <Header />
      <WrappedComponent {...props} />
    </div>
  );
};

export default withHeader;
