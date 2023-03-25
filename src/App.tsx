import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experiences from './components/Experiences/Experiences';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import TechStack from './components/TechStack/TechStack';

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="content">
        <Hero />
        <About />
        <TechStack />
        <Experiences />
        <Contact />
      </div>
      <Footer />
    </div>
  )
};