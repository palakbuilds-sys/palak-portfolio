import { useState } from 'react';
import { useReveal } from './hooks/useReveal';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Audiences from './components/Audiences';
import WhyChooseMe from './components/WhyChooseMe';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [loaded, setLoaded] = useState(false);
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div ref={rootRef} className="relative min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Audiences />
          <WhyChooseMe />
          <Projects />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
      {loaded && null}
    </>
  );
}

export default App;
