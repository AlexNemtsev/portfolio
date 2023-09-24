import styled, { css } from 'styled-components';

interface SectionProps {
  $minHeight?: string;
}

export const Section = styled.section<SectionProps>`
  ${(props) =>
    props.$minHeight &&
    css`
      min-height: ${props.$minHeight};
    `}
`;
