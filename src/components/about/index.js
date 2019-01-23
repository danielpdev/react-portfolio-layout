import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = props => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About</title>
      </Helmet>
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">
          Web developer, Programmer and Entrepreneuer
        </h2>
        <div className="about-info">
          <img
            src="https://raw.githubusercontent.com/bradtraversy/modern_portfolio/master/dist/img/portrait.jpg"
            alt=""
            className="bio-image"
          />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            molestias earum provident non minima dolore! Doloremque animi iusto
            laborum id incidunt. Eos voluptates sint nisi deleniti consequatur
            sunt doloremque! Laudantium accusantium sint consectetur iste non.
            Quasi, nemo modi dolor quaerat optio natus est. Eaque, recusandae
            sint nisi saepe atque esse?
          </div>
          <div className="job job-1">
            <h3>123 Webshop</h3>
            <h6> Fullstack developer </h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eaque eos temporibus qui harum aperiam repellendus porro omnis
              minus corporis.
            </p>
          </div>
          <div className="job job-2">
            <h3>123 Webshop</h3>
            <h6> Frontend developer </h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eaque eos temporibus qui harum aperiam repellendus porro omnis
              minus corporis.
            </p>
          </div>
          <div className="job job-3">
            <h3>123 Webshop</h3>
            <h6> Backend developer </h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eaque eos temporibus qui harum aperiam repellendus porro omnis
              minus corporis.
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default About;
