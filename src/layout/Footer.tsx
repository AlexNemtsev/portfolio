import styled from 'styled-components';
import { Container } from '../components/Container';
import { StyledLink } from '../components/StyledLinks';

export const Footer = () => {
  return (
    <Container as="footer">
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
    </Container>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  ul {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    gap: 48px;
    padding: 0;
    list-style: none;
  }
`;
