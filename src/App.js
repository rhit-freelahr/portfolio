import logo from './logo.svg';
import Header from './components/header.js'
import Home from './components/home.js'
import Projects from './components/projects.js'
import Skills from './components/skills.js'
import Experience from "./components/experience.js"
import Education from  "./components/education.js"
import Contact from "./components/contact.js"

function App() {
  return (
    <>
      <Header/>
      <main className='flex flex-col items-center'>
        <Home/>
        <div className='flex flex-col items-center px-4 max-w=[600px] mx-auto'>
          <Projects/>
          <Skills/>
          <Experience/>
          <Education/>
          <Contact/>
        </div>
      </main>
    </>
  );
}

export default App;
