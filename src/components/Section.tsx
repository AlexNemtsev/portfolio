import styled, { css } from 'styled-components';

interface SectionProps {
  $minHeight?: string;
}

export const Section = styled.section<SectionProps>`
  margin: 0 180px;
  ${(props) =>
    props.$minHeight &&
    css`
      min-height: ${props.$minHeight};
    `}
`;