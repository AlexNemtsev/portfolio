import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper';
import { Icon, IconProps } from './Icon';
import { StyledLink } from './StyledLinks';

interface CaptionProps {
  caption: string;
  link?: string;
}

interface IconWithCaptionProps extends IconProps, CaptionProps {}

export const IconWithCaption = (props: IconWithCaptionProps) => {
  return (
    <FlexWrapper $direction="column" $align="center" $rowGap="20px">
      <Icon {...props} />
      <Caption {...props} />
    </FlexWrapper>
  );
};

const Caption = (props: CaptionProps) => {
  if (props.link) {
    return <StyledLink href={props.link}>{props.caption}</StyledLink>;
  }

  return <StyledSpan>{props.caption}</StyledSpan>;
};

const StyledSpan = styled.span`
  text-transform: uppercase;
  max-width: 120px;
`;
