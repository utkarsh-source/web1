import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Partner from './components/Partner';
import Staffing from './components/Staffing';
import Msp from './components/Msp';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <Partner />
      <Staffing />
      <Msp />
      <Services />
      <Footer/>
    </div>
  );
}

export default App;
