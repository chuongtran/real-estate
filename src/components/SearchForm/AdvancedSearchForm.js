/* eslint-disable jsx-a11y/no-static-element-interactions */
import { IconClose } from 'components/Common';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const StyledPad = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  background: #fff;
  padding: 40px;
  z-index: 1000;
  transition: 0.4s all;
  transform: ${props => props.visible ? 'translateX(0)' : 'translateX(-100%)'};
`;

const StyledBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 108, 112, 0.3);
  padding: 40px;
  z-index: 999;
  transition: 0.4s all;
  opacity: ${props => props.visible ? 1 : 1};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

const AdvancedSearchForm = ({ params, visible, onClose, onSubmit }) => {
  return (
    <div>
      <StyledPad visible={visible}>
        <div className="flex justify-content-space-between align-items-center mb-6">
          <span className="text--size-18">
            Advanced Search
          </span>
          <div className="flex align-items-center pointer" onClick={onClose}>
            Hide Filter&nbsp;&nbsp;
            <IconClose />
          </div>
        </div>
        <div>
          <SearchForm params={params} onSubmit={(params) => { onSubmit(params); onClose() }} />
        </div>
      </StyledPad>
      <StyledBackdrop visible={visible} onClick={onClose} />
    </div>
  );
};

AdvancedSearchForm.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  params: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};
AdvancedSearchForm.defaultProps = {
  visible: false,
  params: {},
};

export default AdvancedSearchForm;
