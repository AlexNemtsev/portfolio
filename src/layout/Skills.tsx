import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { SkillsList } from '../components/SkillsList';

export const Skills = () => {
  return (
    <Container as="section">
      <SectionTitle $margin="0 0 28px" id="skills">
        Skills
      </SectionTitle>
      <SkillsList />
    </Container>
  );
};
