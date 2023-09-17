import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper';
import { Icon } from './Icon';

const ICONSIZEWEB = 120;

interface SkillProps {
  iconId: string;
  skillName: string;
}

const GITVIEWBOX = '0 0 48 48';

export const Skill = (props: SkillProps) => {
  return (
    <FlexWrapper $direction="column" $align="center">
      <Icon
        iconId={props.iconId}
        width={`${ICONSIZEWEB}`}
        height={`${ICONSIZEWEB}`}
        viewBox={props.iconId === 'git' ? GITVIEWBOX : `0 0 ${ICONSIZEWEB} ${ICONSIZEWEB}`}
      />
      <SkillName>{props.skillName}</SkillName>
    </FlexWrapper>
  );
};

const SkillName = styled.span`
  text-transform: uppercase;
  max-width: ${ICONSIZEWEB}px;
`;
