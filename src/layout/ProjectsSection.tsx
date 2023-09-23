import { Projects } from '../components/Projects';
import { Section } from '../components/Section';
import { SectionTitle } from '../components/SectionTitle';

export const ProjectsSection = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Projects />
    </Section>
  );
};
