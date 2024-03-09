import logo from './logo.svg';
import Header from './components/header.js'
import Home from './components/home.js'

function App() {
  return (
    <>
      <Header/>
      <main className='flex flex-col items-center'>
        <Home/>
      </main>
    </>
  );
}

export default App;
