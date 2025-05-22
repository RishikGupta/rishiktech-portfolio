import { useEffect, useState } from 'react';
import './App.css';
import './index.css';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Remove loader after fade-out transition
  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 700); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  // Lock scrolling while loading
  useEffect(() => {
    document.body.style.overflow = showLoader ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <LoadingScreen fadeOut={isLoaded} onComplete={() => setIsLoaded(true)} />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bg-black text-gray-100`}
        style={{
          willChange: 'opacity',
          contain: 'layout style paint',
        }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
