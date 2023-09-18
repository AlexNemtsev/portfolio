import React from 'react';
import { FlexWrapper } from './FlexWrapper';
import { HighlightedLink } from './StyledLinks';
import styled from 'styled-components';

interface StyledLabelProps {
  children: React.ReactNode;
}

export const Form = () => {
  return (
    <FlexWrapper as="form" $direction="column" $align="center" $rowGap="25px">
      <StyledLabel>
        Name
        <input type="text" />
      </StyledLabel>
      <StyledLabel>
        Email
        <input type="email" />
      </StyledLabel>
      <StyledLabel>
        Message
        <textarea></textarea>
      </StyledLabel>
      <HighlightedLink as={StyledSubmit} type="submit" value="Submit" />
    </FlexWrapper>
  );
};

const StyledLabel = (props: StyledLabelProps) => {
  return (
    <FlexWrapper as="label" $direction="column" $maxWidth="540px" $width="100%" $rowGap="6px">
      {props.children}
    </FlexWrapper>
  );
};

const StyledSubmit = styled.input.attrs(() => ({
  type: 'submit',
  value: 'Submit',
}))`
  font-size: 16px;
  width: 100%;
  max-width: 540px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
