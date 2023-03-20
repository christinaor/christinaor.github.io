import placeholderLogo from './assets/leaf-svgrepo-com.svg';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experiences from './components/Experiences/Experiences';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
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
        <div>Built && Designed by Christina Or</div>
      </footer>
    </div>
  )
}

export default App
