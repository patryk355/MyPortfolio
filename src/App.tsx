import {Header} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {AboutSection} from './components/AboutSection';
import {SkillsSection} from './components/SkillsSection';
import {ProjectsSection} from './components/ProjectsSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';

export function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
}
