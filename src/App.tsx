import { AboutSection } from './layout/AboutSection';
import { ContactsSection } from './layout/ContactsSection';
import { Header } from './layout/Header';
import { MainSection } from './layout/MainSection';
import { ProjectsSection } from './layout/ProjectsSection';
import { SkillsSection } from './layout/SkillsSection';

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactsSection />
    </>
  );
}

export default App;
