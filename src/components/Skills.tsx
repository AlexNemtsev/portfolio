import { FlexWrapper } from './FlexWrapper';
import { Skill } from './Skill';

interface skill {
  iconId: string;
  skillName: string;
}

const skills: skill[] = [
  {
    iconId: 'js',
    skillName: 'javascript',
  },
  {
    iconId: 'ts',
    skillName: 'typescript',
  },
  {
    iconId: 'jest',
    skillName: 'jest',
  },
  {
    iconId: 'react',
    skillName: 'react',
  },
  {
    iconId: 'styled',
    skillName: 'styled components',
  },
  {
    iconId: 'redux',
    skillName: 'redux',
  },
  {
    iconId: 'git',
    skillName: 'git',
  },
];

export const Skills = () => {
  return (
    <FlexWrapper $rowGap="60px" $columnGap="120px" $justify="center">
      {skills.map((skill) => (
        <Skill iconId={skill.iconId} skillName={skill.skillName} key={skill.skillName} />
      ))}
    </FlexWrapper>
  );
};
