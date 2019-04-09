import React from 'react';

const WorkModal = ({ project, isOpen, closeModal }) => (
  project ? <div class={`background--skyBlue modal--${isOpen ? 'open' : 'closed'}`}>
    <span onClick={closeModal} class="color--cloud modal__closeButton">
      <i class="fa fa-window-close-o"></i>
    </span>
    <img alt={project.img.alt}
        class="modal__image"
        src={project.img.src}/>
    <div class="color--cloud modal__text">
      <h2 class="modal__title">
        { project.title }
      </h2>
      <a class="color--skyBlue modal__link"
        href={project.href}>
        Check it out
      </a>
      <p class="modal__description">
        { project.description }
      </p>
    </div>
  </div> : <></>
)

export default WorkModal;