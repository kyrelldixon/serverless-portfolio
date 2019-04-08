import React from 'react';

const Navbar = () => (
  <main class="overflow--auto">
    <h1 class="color--skyBlue section__heading--largest">
      Kyrell Dixon
    </h1>

    <ul class="section--social">

      {/* <!--Links to relevant professional social media & resume -->
      <!-- See: http://fontawesome.io/icons/#brand for more -->

      <!-- Link to Linked In profile --> */}
      <li class="socialWrapper">
        <a class="color--skyBlue social"
          title="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kyrell-dixon">
          <i class="fa fa-linkedin"></i>
        </a>
      </li>

      <li class="socialWrapper color--skyBlue">
        <a class="social color--skyBlue"
          title="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/kyrelldixon">
          <i class="fa fa-github"></i>
        </a>
      </li>

      <li class="socialWrapper">
        <a class="social color--skyBlue"
          title="Resume"
          target="_blank"
          rel="noopener noreferrer"
          href="https://s3.amazonaws.com/kyrelldixon-docs/Resume+2018.pdf">
          <i class="fa fa-file-text"></i>
        </a>
      </li>
    </ul>
  </main>
);

export default Navbar;