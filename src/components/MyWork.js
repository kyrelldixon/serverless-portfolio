import React from 'react';
import WorkBubble from './WorkBubble';

const MyWork = ({ projects }) => (
  <section class="section section--alignCentered section--description">
    { projects && projects.map((project, idx) => <WorkBubble key={idx} project={project} />) }
  </section>
);

export default MyWork;