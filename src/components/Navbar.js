import React from 'react';
import SocialIcons from './SocialIcons';
import config from '../config/portfolio-options.json'

const Navbar = () => (
  <nav class="overflow--auto">
    <h1 class="color--skyBlue section__heading--largest">
      { config.name }
    </h1>
    <SocialIcons socialMediaLinks={config.social} />
  </nav>
);

export default Navbar;