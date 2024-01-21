import Nav from './components/Nav';
import HomeSection from './components/HomeSection';
import WorkSection from './components/WorkSection';
import SkillSection from './components/SkillsSection';

function App() {

  return (
    <div className='Application'>
      <Nav/>
      <HomeSection/>
      <SkillSection/>
      <WorkSection/>
    </div>
  );
}

export default App
