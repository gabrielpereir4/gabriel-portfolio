import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import USPSoftLivre from './sections/USPSoftLivre';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
    </div>
);
}

export default App;
