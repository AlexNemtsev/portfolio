import { Container } from '../components/Container';
import { Projects } from '../components/Projects';
import { SectionTitle } from '../components/SectionTitle';

export const ProjectsSection = () => {
  return (
    <Container as="section" id="projects">
      <SectionTitle $margin="140px 0 32px">Projects</SectionTitle>
      <Projects />
    </Container>
  );
};
