import placeholderLogo from './assets/leaf-svgrepo-com.svg';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';
import Experiences from './components/Experiences/Experiences.tsx';
import Hero from './components/Hero/Hero.tsx';
import NavBar from './components/NavBar/NavBar.tsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <img src={placeholderLogo} className="placeholder-logo" alt="placeholder logo" width="35px" />
        <NavBar />
      </header>
      <div className="left-links">
      </div>
      <div className="content">
        <Hero />
        <About />
        <Experiences />
        <Contact />
      </div>
      <footer>
        <code>Built && Designed by Christina Or</code>
      </footer>
    </div>
  )
}

export default App
