import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Booking from './components/BookingInfo';
import Photography from './components/Photography';
import Videos from './components/Videos';


function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Booking />
      <Photography />
      <Videos />
    </main>
  );
}

export default App;
