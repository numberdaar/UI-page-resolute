import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionValues from './components/SectionValues';
import OurSolutions from './components/OurSolutions';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SectionValues />
      <OurSolutions />
      <Testimonials />
      <FaqSection />
      <Footer/>
    </div>
  );
}

export default App;
