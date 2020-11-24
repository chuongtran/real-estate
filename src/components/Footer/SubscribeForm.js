import { Button, IconChevronRight, Input } from 'components/Common';
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  border-radius: 100px;
  background: #354765;
  border: 1px solid #354765;
  color: #8A99B3;
`;
const StyleButton = styled(Button)`
  width: 50px;
  min-width: 50px;
  background: #354765;
  border: 1px solid #354765;
  border-radius: 50%;
`;


const SubscribeForm = () => {
  return (
    <form className="flex">
      <StyledInput className="flex--1" height="50" placeholder="Your email" />
      <StyleButton className="ml-2">
        <IconChevronRight />
      </StyleButton>
    </form>
  )
};

export default SubscribeForm;
