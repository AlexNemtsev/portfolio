import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper';
import { Icon, IconProps } from './Icon';

interface IconWithCaptionProps extends IconProps {
  skillName: string;
}

export const IconWithCaption = (props: IconWithCaptionProps) => {
  return (
    <FlexWrapper $direction="column" $align="center" $rowGap="20px">
      <Icon iconId={props.iconId} viewBox={props.viewBox} sizes={props.sizes} />
      <Caption>{props.skillName}</Caption>
    </FlexWrapper>
  );
};

const Caption = styled.span`
  text-transform: uppercase;
  max-width: 120px;
`;
