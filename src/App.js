import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import SectionItem from './components/SectionItem';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <Section
        id="hero"
        title="India's First e-Ink Based Education Solution"
        className="bg-dark text-white text-center py-5"
        content={
          <img
            // src={require('./assets/dummy-design.png')}
            alt="Hero"
            className="img-fluid"
            style={{ maxWidth: '60%' }}
          />
        }
      />

      {/* About Us Section */}
      <Section
        id="about"
        title="About Us"
        className="bg-light py-5"
        content={
          <>
            <SectionItem
              title="Transforming Education"
              description="India's first e-ink based platform to unlock student potential."
            />
          </>
        }
      />

      {/* Our Values Section */}
      <Section
        id="values"
        title="Our Values"
        className="py-5"
        content={
          <div className="row text-center">
            <SectionItem
              title="For Students"
              description="Interactive learning and focused tools to help you succeed."
            />
            <SectionItem
              title="For Teachers"
              description="Efficient tools to improve classroom engagement."
            />
            <SectionItem
              title="For Institutions"
              description="Cost-effective and smarter administration solutions."
            />
          </div>
        }
      />

      {/* Our Solutions */}
      <Solutions />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <FAQs />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;