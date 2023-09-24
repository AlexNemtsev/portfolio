import { AboutSection } from './layout/AboutSection';
import { ContactsSection } from './layout/ContactsSection';
import { HeaderSection } from './layout/HeaderSection';
import { MainSection } from './layout/MainSection';
import { ProjectsSection } from './layout/ProjectsSection';
import { SkillsSection } from './layout/SkillsSection';

function App() {
  return (
    <>
      <HeaderSection />
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactsSection />
    </>
  );
}

export default App;
