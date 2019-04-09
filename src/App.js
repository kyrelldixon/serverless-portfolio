import React from 'react';
import Navbar from './components/Navbar';
import PortfolioExamples from './components/PortfolioExamples';
import SectionHeader from './components/SectionHeader';
import AboutMe from './components/AboutMe';
import './styles/main.css';

const App = () => {
  return (
    <>
      <Navbar />
      <SectionHeader title="Portfolio" />
      <PortfolioExamples />
      <SectionHeader title="About Me" />
      <AboutMe />
    </>
  );
}

export default App;
