import { FlexWrapper } from './FlexWrapper';
import { IconWithCaption } from './IconWithCaption';

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
          skillName={skill.skillName}
          key={skill.skillName}
          viewBox={'0 0 120 120'}
          sizes={ICONSIZES}
        />
      ))}
    </FlexWrapper>
  );
};
