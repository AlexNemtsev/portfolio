import styled from 'styled-components';
import { Container } from '../components/Container';
import { StyledLink, HighlightedLink } from '../components/StyledLinks';

export const HEADERHEIGHT = '100px';

export const Header = () => {
  return (
    <StyledHeader>
      <Container as={StyledMenu}>
        <StyledLink href="#main">Home</StyledLink>
        <ul>
          <li>
            <StyledLink href="#projects">Projects</StyledLink>
          </li>
          <li>
            <StyledLink href="#skills">Skills</StyledLink>
          </li>
          <li>
            <HighlightedLink href="#contacts">Contact</HighlightedLink>
          </li>
        </ul>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  ul {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    gap: 90px;
    padding: 0;
    list-style: none;
  }
`;
