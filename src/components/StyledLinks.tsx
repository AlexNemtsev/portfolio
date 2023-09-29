import styled from 'styled-components';
import { Highlighted } from './Highlighted';

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const HighlightedLink = styled(Highlighted)`
  padding: 12px 20px;
  border-radius: 6px;
`;
