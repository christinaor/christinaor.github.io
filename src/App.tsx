import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experiences from './components/Experiences/Experiences';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';


export default function App() {
  return (
    <div className="App">
      {/* <header>
        <NavBar />
      </header> */}
      <div className="left-links">
      </div>
      <div className="content">
        <Hero />
        <About />
        <Experiences />
        <Contact />
      </div>
      <footer>
        <div>Built && Designed by Christina Or</div>
      </footer>
    </div>
  )
};