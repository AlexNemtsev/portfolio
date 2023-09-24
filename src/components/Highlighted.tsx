import styled from 'styled-components';

export const Highlighted = styled.a`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.secondaryColor};
  text-decoration: none;
`;
