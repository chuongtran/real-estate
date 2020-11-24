import { COLORS } from 'constants/Styles';
import styled from 'styled-components';

export const Label = styled.div`
  font-size: 13px;
  line-height: 25px;
  height: 25px;
  min-width: 75px;
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.active ? COLORS.RED : COLORS.BACKGROUND};
  color: #fff;
  display: inline-block;
`;