import styled, { css } from 'styled-components';

interface FlexWrapperProps {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
  $rowGap?: string;
  $columnGap?: string;
  $width?: string;
  $maxWidth?: string;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction ?? 'row'};
  justify-content: ${(props) => props.$justify ?? 'flex-start'};
  align-items: ${(props) => props.$align ?? 'stretch'};
  flex-wrap: ${(props) => props.$wrap ?? 'wrap'};
  row-gap: ${(props) => props.$rowGap ?? 'initial'};
  column-gap: ${(props) => props.$columnGap ?? 'initial'};

  ${(props) =>
    props.$maxWidth &&
    css`
      max-width: ${props.$maxWidth};
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}
`;
