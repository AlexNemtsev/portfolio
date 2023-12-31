import { FlexWrapper } from './FlexWrapper';
import { IconWithCaption } from './IconWithCaption';

interface Skill {
  iconId: string;
  skillName: string;
}

const skills: Skill[] = [
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

const ICONSIZES = {
  $web: { width: '120px', height: '120px' },
  $mobile: { width: '90px', height: '90px' },
};

export const SkillsList = () => {
  return (
    <FlexWrapper $rowGap="60px" $columnGap="120px" $justify="center">
      {skills.map((skill) => (
        <IconWithCaption
          iconId={skill.iconId}
          caption={skill.skillName}
          key={skill.skillName}
          viewBox={'0 0 120 120'}
          rowGap="20px"
          sizes={ICONSIZES}
        />
      ))}
    </FlexWrapper>
  );
};
