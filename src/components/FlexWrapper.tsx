import styled, { css } from 'styled-components';

interface FlexWrapperProps {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
  $isContainer?: boolean;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction ?? 'row'};
  justify-content: ${(props) => props.$justify ?? 'flex-start'};
  align-items: ${(props) => props.$align ?? 'stretch'};
  flex-wrap: ${(props) => props.$wrap ?? 'nowrap'};

  ${(props) =>
    props.$isContainer &&
    css`
      margin: 0 180px;
    `}
`;
