import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Skills } from '../components/Skills';

export const SkillsSection = () => {
  return (
    <Container as="section">
      <SectionTitle $margin="140px 0 28px">Skills</SectionTitle>
      <Skills />
    </Container>
  );
};
