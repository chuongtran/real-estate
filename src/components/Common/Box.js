import { COLORS } from 'constants/Styles';
import styled from 'styled-components';

export const Box = styled.div`
  background: #FFFFFF;
  border: 1px solid ${COLORS.GRAY_BORDER};
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 40px;
  padding: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;
