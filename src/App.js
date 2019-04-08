import React, { Component } from 'react';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <>
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

      <section class="background--skyBlue section">
        <h2 class="color--cloud margin--none section__text--centered">
          Portfolio
        </h2>
      </section>

      <section class="section section--alignCentered section--description">
        <div class="section__exampleWrapper">
          <div class="section__example">
            <img alt="example screenshot of a project involving code"
                class="section__exampleImage"
                src="images/example1.png"/>
            <dl class="color--cloud">
              <dt class="section__exampleTitle section__text--centered">
                Work Example
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>

        <div class="section__exampleWrapper">
          <div class="section__example">
            <img alt="example screenshot of a project involving chemistry"
                class="section__exampleImage"
                src="images/example2.png"/>
            {/* <!-- “Chemistry” by Surian Soosay is licensed under CC BY 2.0
                https://www.flickr.com/photos/ssoosay/4097410999 --> */}
            <dl class="color--cloud">
              <dt class="section__exampleTitle section__text--centered ">
                Work Example
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>

        <div class="section__exampleWrapper">
          <div class="section__example">
            <img alt="example screenshot of a project involving cats"
                class="section__exampleImage"
                src="images/example3.png"/>
            {/* <!-- “Bengal cat” by roberto shabs is licensed under CC BY 2.0
                https://www.flickr.com/photos/37287295@N00/2540855181 --> */}
            <dl class="color--cloud">
              <dt class="section__exampleTitle section__text--centered">
                Work Example
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
      </section>

      <section class="background--skyBlue section">
        <h2 class="color--cloud margin--none section__text--centered">
          About Me
        </h2>
      </section>

      <section class="section section--alignCentered section--description">
        <p class="color--darkgrey section__description">
          I am learning to code in the cloud! I like to work hard and learn new things.
          I want to work for a company that will pay me to code in the cloud!
        </p>
      </section>

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
            href="#">
            Check it out
          </a>
          <p class="modal__description">
            A long description of the work in question.
          </p>
        </div>
      </div>
    </>
    );
  }
}

export default App;
