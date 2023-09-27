import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper';
import { Icon } from './Icon';

interface SkillProps {
  iconId: string;
  skillName: string;
}

// TODO: Сделать компонент универсальным для иконок соцсетей
// TODO: добавить адаптив иконок для мобилок
// http://css.yoksel.ru/svg-sizes/#coordinates
export const Skill = (props: SkillProps) => {
  return (
    <FlexWrapper $direction="column" $align="center" $rowGap="20px">
      <Icon iconId={props.iconId} />
      <SkillName>{props.skillName}</SkillName>
    </FlexWrapper>
  );
};

const SkillName = styled.span`
  text-transform: uppercase;
  max-width: 120px;
`;
