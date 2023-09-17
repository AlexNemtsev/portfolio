import { skills } from '../data/skills';
import { FlexWrapper } from './FlexWrapper';
import { Skill } from './Skill';

export const Skills = () => {
  return (
    <FlexWrapper $rowGap="60px" $columnGap="120px" $justify="center">
      {skills.map((skill) => (
        <Skill iconId={skill.iconId} skillName={skill.skillName} key={skill.skillName} />
      ))}
    </FlexWrapper>
  );
};
