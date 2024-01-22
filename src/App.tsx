import Nav from './components/Nav';
import HomeSection from './components/HomeSection';
import WorkSection from './components/WorkSection';
import SkillSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {

  return (
    <div className='Application'>
      <Nav/>
      <HomeSection/>
      <SkillSection/>
      <WorkSection/>
      <ContactSection/>
    </div>
  );
}

export default App
