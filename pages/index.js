import About from '../components/About';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import ContactMe from '../components/ContactMe';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <About />
      </div>
      <Skills />
      {/* <Portfolio /> */}
      <Resume />
      {/* <ContactMe /> */}
    </div>
  );
}
