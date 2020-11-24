/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable eqeqeq */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { COLORS } from 'constants/Styles';
import styled from 'styled-components';

import { Select as AntSelect, Input as AntInput } from 'antd';

export const Input = styled(AntInput)`
  height: ${props => props.height ? props.height : 60}px;
  background: #FFFFFF;
  border: 1px solid ${COLORS.GRAY_BORDER};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 9px 11px;
  width: 100%;
  font-size: 15px;
`;

export const Textarea = styled.textarea`
  background: #FFFFFF;
  border: 1px solid ${COLORS.GRAY_BORDER};
  box-sizing: border-box;
  border-radius: 8px;
  height: 272px;
  padding: 9px 11px;
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-size: 15px;
`;


const StyledSelect = styled(AntSelect)`
  width: ${props => props.block ? '100%' : ''};
  text-align: left;
`;

export const Select = ({ options, onChange, value, placeholder, ...rest }) => {
  const parsedOptions = useMemo(() => {
    if (['string', 'number'].includes(typeof options[0])) return options.map((option) => ({
      value: option,
      label: option,
    }));
    return options;
  }, [options]);

  const parsedValue = useMemo(() => {
    const foundOption = parsedOptions.find((option) => option.value == value);
    return foundOption ? foundOption.label : null;
  }, [parsedOptions, value]);

  return (
    <StyledSelect
      onChange={onChange} 
      value={parsedValue} 
      allowClear
      placeholder={placeholder}
      dropdownMatchSelectWidth={false}
      {...rest}
    >
      {parsedOptions.map(opt => (
        <AntSelect.Option value={opt.value} key={opt.value}>
          {opt.label}
        </AntSelect.Option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};
Select.defaultProps = {
  placeholder: '',
  value: null,
};
