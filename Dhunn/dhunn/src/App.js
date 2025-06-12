import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import AllRouter from './component/AllRouter';
import NowPlay from './pages/NowPlay';
import MusicProvider from './Context/MusicProvider';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <MusicProvider>
      <Navbar/>
      <AllRouter/>
      
      </MusicProvider>
      
    </div>
  );
}

export default App;
