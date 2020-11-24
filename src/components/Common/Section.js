import { COLORS } from 'constants/Styles';
import styled from 'styled-components';

export const Section = styled.div`
  padding-top: 55px;
  padding-bottom: 60px;
  background: ${props => props.grey ? '#F7F7F7' : '#ffffff'};
`;
export const SectionTitle = styled.h3`
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 10px;
  text-align: center;
`;

export const SectionSubtitle = styled.p`
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: ${COLORS.TEXT_SECONDARY};
`;
