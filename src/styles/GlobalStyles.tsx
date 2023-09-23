import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.theme.mainColor};
  font-weight: 400;
}

body {
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundColor};
}
`;
