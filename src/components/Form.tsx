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
        <StyledInput type="email" required placeholder="example@gmail.com" />
      </StyledLabel>
      <StyledLabel>
        Message
        <StyledInput as={StyledTextArea} placeholder="Type your message here" />
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
  font-size: 16px;
  font-family: inherit;
  font-weight: 400;
  border: 1px solid ${(props) => props.theme.inputBorderColor};
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme.placeholderColor};
    font-size: 14px;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.accentColor};
    border: none;
  }
`;

const StyledTextArea = styled.textarea`
  resize: none;
  min-height: 165px;
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
