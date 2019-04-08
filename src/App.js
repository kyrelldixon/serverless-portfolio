import React from 'react';
import Navbar from './components/Navbar';
import MyWork from './components/MyWork';
import WorkModal from './components/WorkModal';
import SectionHeader from './components/SectionHeader';
import AboutMe from './components/AboutMe';
import './styles/main.css';
import mockProjects from './mock-data/projects.json'

const App = () => {
  return (
    <>
      <Navbar />
      <SectionHeader title="Portfolio" />
      <MyWork projects={mockProjects}/>
      <SectionHeader title="About Me" />
      <AboutMe />
      <WorkModal />
    </>
  );
}

export default App;
