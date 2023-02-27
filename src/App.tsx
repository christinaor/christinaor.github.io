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

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
