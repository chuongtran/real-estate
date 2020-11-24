/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box } from 'components/Common';

const Author = ({ author }) => {
  return (
    <Box>
      <h4 className="text--size-18 mb-5">Listed By</h4>
      <div className="flex">
        <Avatar size={90} className="mr-3" src={author.avatar} />
        <div className="flex flex--column justify-content-space-between pt-1 pb-1">
          <span className="text--size-16">{author.fullName}</span>
          <span>{author.phone}</span>
          <small className="text--size-13">{author.email}</small>
          <a className="text--red">View My Listing</a>
        </div>
      </div>
      
    </Box>
  );
};

Author.propTypes = {
  author: PropTypes.object.isRequired,
};
export default Author;
