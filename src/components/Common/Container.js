import styled from 'styled-components';

const getSize = (size) => {
  switch (size) {
    case 'full':
      return 'calc(100% - 100px)';
    case 'big':
      return '1540px';

    default:
      return '1140px';
  }
}
export const Container = styled.div`
  max-width: ${props => getSize(props.size)};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;