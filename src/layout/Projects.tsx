import { Container } from '../components/Container';
import { ProjectsList } from '../components/ProjectsList';
import { SectionTitle } from '../components/SectionTitle';

export const Projects = () => {
  return (
    <Container as="section" id="projects">
      <SectionTitle $margin="140px 0 32px">Projects</SectionTitle>
      <ProjectsList />
    </Container>
  );
};
