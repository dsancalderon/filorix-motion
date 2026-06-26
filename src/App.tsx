import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
