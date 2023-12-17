import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Teams from './components/Teams/Teams';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <Teams />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
