import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './page/Carousel';
import Home from './page/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Carousel/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
