import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    mainColor: string;
    titleColor: string;
    accentColor: string;
    secondaryColor: string;
  }
}
