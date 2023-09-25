import styled, { css } from 'styled-components';

interface SectionTitleProps {
  $marginBottom?: string;
}

export const SectionTitle = styled.h2<SectionTitleProps>`
  margin: 0;
  color: ${(props) => props.theme.titleColor};

  ${(props) =>
    props.$marginBottom &&
    css`
      margin-bottom: ${props.$marginBottom};
    `}
`;
