import React from 'react';

const SectionHeader = ({ title }) => (
  <section class="background--skyBlue section">
    <h2 class="color--cloud margin--none section__text--centered">
      { title }
    </h2>
  </section>
)

export default SectionHeader;