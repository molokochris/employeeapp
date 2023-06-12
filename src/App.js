import './App.css';
import Navigation from './components/Navigation';
import Container from './components/Container';
import { BrowserRouter as Router } from 'react-router-dom';
// import LandBanner from './components/LandBanner';

function App() {
  
  return (
    <Router>
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
    </Router>
  );
}

export default App;
