import React, { Suspense } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

// Lazy loading para componentes que no están "above the fold"
const About = React.lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Features = React.lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const AboutUs = React.lazy(() => import('./components/AboutUs').then(m => ({ default: m.AboutUs })));
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function App() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <About />
        <Features />
        <AboutUs />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
