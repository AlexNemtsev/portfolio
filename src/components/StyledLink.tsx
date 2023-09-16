import styled, { css } from 'styled-components';

interface StyledLinkProps {
  filled?: string;
}

export const StyledLink = styled.a<StyledLinkProps>`
  color: inherit;
  text-decoration: none;
  font-weight: 500;

  ${(props) =>
    props.filled &&
    css`
      background-color: #5222d0;
      color: #dbffff;
      padding: 12px 20px;
      border-radius: 6px;
    `}
`;
