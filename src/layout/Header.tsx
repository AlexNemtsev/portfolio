import styled from 'styled-components';
import { Menu } from '../components/Menu';

export const Header = () => {
  return (
    <StyledHeader>
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 0 180px;
`;
