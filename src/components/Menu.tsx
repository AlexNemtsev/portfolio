import styled from 'styled-components';
import { StyledLink } from './StyledLink';

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <StyledLink href="">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="">Projects</StyledLink>
        </li>
        <li>
          <StyledLink href="" $filled>
            Contact
          </StyledLink>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    padding: 0;
    list-style: none;
  }
`;
