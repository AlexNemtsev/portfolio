import styled, { css } from 'styled-components';

interface SectionTitleProps {
  $margin?: string;
}

export const SectionTitle = styled.h2<SectionTitleProps>`
  padding-top: calc(1em + (1rem + 2 * 40px));
  color: ${(props) => props.theme.titleColor};

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;
