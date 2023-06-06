import './App.css';
import Navigation from './components/Navigation';
import Container from './components/Container';
// import LandBanner from './components/LandBanner';

function App() {
  
  return (
    <div className="App">
      <div className='head'>
        <Navigation />
      </div>
      <main>
        <Container />
      </main>
      <footer>
        &copy;
      </footer>
    </div>
  );
}

export default App;
