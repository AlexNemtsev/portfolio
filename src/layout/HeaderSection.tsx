import styled from 'styled-components';
import { Container } from '../components/Container';
import { StyledLink, HighlightedLink } from '../components/StyledLinks';

export const HeaderSection = () => {
  return (
    <header>
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
    </header>
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
