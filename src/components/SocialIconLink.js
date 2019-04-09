import React from 'react';

const SocialIconLink = ({ socialLink }) => (
  <a class="social color--skyBlue"
    title={socialLink.title}
    target="_blank"
    rel="noopener noreferrer"
    href={socialLink.link} >
    <i class={`fa fa-${socialLink.icon}`}></i>
  </a>
);

export default SocialIconLink;