import logo from './logo.svg';
import Header from './components/header.js'
import Home from './components/home.js'
import Projects from './components/projects.js'

function App() {
  return (
    <>
      <Header/>
      <main className='flex flex-col items-center'>
        <Home/>
        <div className='flex flex-col items-center px-4 max-w=[600px] mx-auto'>
          <Projects/>
        </div>
      </main>
    </>
  );
}

export default App;
