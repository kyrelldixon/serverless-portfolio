import React from 'react';
import SocialIconLink from './SocialIconLink';

const SocialIcons = ({ socialMediaLinks }) => (
  <ul class="section--social">
    { socialMediaLinks.map(socialLink => (
      <li class="socialWrapper">
        <SocialIconLink socialLink={socialLink} />
      </li>
    ))}
  </ul>
);

export default SocialIcons;