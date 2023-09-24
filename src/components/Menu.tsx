import styled from 'styled-components';
import { HighlightedLink, StyledLink } from './StyledLinks';
import { Container } from './Container';

export const Menu = () => {
  return (
    <Container as={StyledMenu}>
      <StyledLink href="#main">Home</StyledLink>
      <ul>
        <li>
          <StyledLink href="#projects">Projects</StyledLink>
        </li>
        <li>
          <HighlightedLink href="#contacts">Contact</HighlightedLink>
        </li>
      </ul>
    </Container>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    gap: 90px;
    padding: 0;
    list-style: none;
  }
`;
