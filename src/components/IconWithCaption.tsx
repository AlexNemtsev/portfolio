import styled, { css } from 'styled-components';
import { FlexWrapper } from './FlexWrapper';
import { Icon, IconProps } from './Icon';
import { StyledLink } from './StyledLinks';

interface CaptionProps {
  caption: string;
  link?: string;
  fontSize?: string;
}

interface StyledSpanProps {
  $fontSize?: string;
}

interface IconWithCaptionProps extends IconProps, CaptionProps {
  rowGap?: string;
}

export const IconWithCaption = (props: IconWithCaptionProps) => {
  return (
    <FlexWrapper $direction="column" $align="center" $rowGap={props.rowGap}>
      <Icon {...props} />
      <Caption {...props} />
    </FlexWrapper>
  );
};

const Caption = (props: CaptionProps) => {
  if (props.link) {
    return (
      <StyledSpan as={StyledLink} href={props.link} $fontSize={props.fontSize}>
        {props.caption}
      </StyledSpan>
    );
  }

  return <StyledSpan>{props.caption}</StyledSpan>;
};

const StyledSpan = styled.span<StyledSpanProps>`
  text-transform: uppercase;
  max-width: 120px;

  ${(props) =>
    props.$fontSize &&
    css`
      font-size: ${props.$fontSize};
    `}
`;
