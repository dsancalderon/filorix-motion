import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
