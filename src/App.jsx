import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
);
}

export default App;
