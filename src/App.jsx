import Home from './sections/Home';
import About from './sections/About';
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
        <About />
        <Projects />
        <Contact />
        <USPSoftLivre />
        <Footer />
    </div>
);
}

export default App;
