import { About } from './layout/About';
import { Contacts } from './layout/Contacts';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Projects } from './layout/Projects';
import { Skills } from './layout/Skills';

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}

export default App;
