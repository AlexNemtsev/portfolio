import styled from 'styled-components';
import { StyledLink } from './StyledLinks';

export const FooterMenu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <StyledLink href="#projects">Projects</StyledLink>
        </li>
        <li>
          <StyledLink href="#contacts">Contact</StyledLink>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 48px;
    padding: 0;
    list-style: none;
  }
`;
