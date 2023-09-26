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
        <StyledInput type="text" placeholder="Ivan Ivanov" />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput type="email" required />
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
    <FlexWrapper as={Label} $direction="column" $maxWidth="540px" $width="100%" $rowGap="6px">
      {props.children}
    </FlexWrapper>
  );
};

const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 48px;
  padding: 15px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 6px;

  ::placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }
`;

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
