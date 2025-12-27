import React from 'react';
import Hero from './components/Hero';
import './App.css';
import Industries from './components/Industries';
import ProductCard from './components/ProductCard';
import DocPilot from './components/DocPilot';
import Doxtract from './components/Doxtract';
import BlogsSection from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Hero />
      <Industries/>
      <ProductCard/>
      <DocPilot/>
      <Doxtract/>
      <BlogsSection/>
      <Contact/>
    </div>
  );
}

export default App;
