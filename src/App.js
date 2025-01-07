import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Carousel from './page/Carousel';
import Home from './page/Home';
import Footer from './components/Footer';
import Room from './page/Room';
import Booking from './page/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar - will be visible on all pages */}
        <Navbar />
        
        {/* Carousel - if you want this to be only visible on the Home page, move it inside the Home route */}
        <Carousel />

        <Routes>
          {/* Home route */}
          <Route path="/home" element={<Home />} />
          
          {/* Room route */}
          <Route path="/room" element={<Room />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      
        <Footer />
      </Router>
    </div>
  );
}


export default App;
