import React from 'react';

const MyWork = () => (
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
);

export default MyWork;