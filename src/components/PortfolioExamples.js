import React, { useState } from 'react';
import WorkBubble from './WorkBubble';
import WorkModal from './WorkModal';
import mockProjects from '../mock-data/projects.json'

const MyWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState();

  const openModal = (project) => {
    setIsOpen(true);
    setActiveProject(project);
  }

  const closeModal = () => {
    setIsOpen(false);
    setActiveProject(null);
  }

  const projects = mockProjects || [];
  
  return (
    <>
      <section class="section section--alignCentered section--description">
        { projects && projects.map((project, idx) => <WorkBubble openModal={openModal} key={idx} project={project} />) }
      </section>
      <WorkModal isOpen={isOpen} closeModal={closeModal} project={activeProject}/>
    </>
  );
}

export default MyWork;