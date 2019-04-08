import React from 'react';

const WorkModal = () => (
  <div class="background--skyBlue modal--closed">
    <span class="color--cloud modal__closeButton">
      <i class="fa fa-window-close-o"></i>
    </span>
    <img alt="example screenshot of a project involving code"
        class="modal__image"
        src="images/example1.png"/>
    <div class="color--cloud modal__text">
      <h2 class="modal__title">
        Work Example Name
      </h2>
      <a class="color--skyBlue modal__link"
        href="/">
        Check it out
      </a>
      <p class="modal__description">
        A long description of the work in question.
      </p>
    </div>
  </div>
)

export default WorkModal;