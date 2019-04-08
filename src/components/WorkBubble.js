import React from 'react';

const WorkBubble = ({ project }) => (
  <div class="section__exampleWrapper">
    <div class="section__example">
      <img alt={project.img.alt}
          class="section__exampleImage"
          src={project.img.src} />
      <dl class="color--cloud">
        <dt class="section__exampleTitle section__text--centered">
          { project.title }
        </dt>
        <dd></dd>
      </dl>
    </div>
  </div>
);

export default WorkBubble;