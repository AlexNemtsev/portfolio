import styled, { css } from 'styled-components';

interface SectionTitleProps {
  $margin?: string;
}

export const SectionTitle = styled.h2<SectionTitleProps>`
  margin: 0;
  color: ${(props) => props.theme.titleColor};

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;
