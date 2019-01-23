import React from "react";
import { Helmet } from "react-helmet";

const Work = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">My wonderful works</h2>
        <div className="projects">
          <div className="item">
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/bradtraversy/modern_portfolio/master/dist/img/projects/project1.jpg"
                alt=""
                className="item-cover"
              />
            </a>
            <a href="#" className="btn-light">
              <i class="fa fa-eye" /> Project
            </a>
            <a href="#" className="btn-dark">
              <i class="fab fa-github" /> github
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/bradtraversy/modern_portfolio/master/dist/img/projects/project2.jpg"
                alt=""
                className="item-cover"
              />
            </a>
            <a href="#" className="btn-light">
              <i class="fa fa-eye" /> Project
            </a>
            <a href="#" className="btn-dark">
              <i class="fab fa-github" /> github
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/bradtraversy/modern_portfolio/master/dist/img/projects/project3.jpg"
                alt=""
                className="item-cover"
              />
            </a>
            <a href="#" className="btn-light">
              <i class="fa fa-eye" /> Project
            </a>
            <a href="#" className="btn-dark">
              <i class="fab fa-github" /> github
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/bradtraversy/modern_portfolio/master/dist/img/projects/project4.jpg"
                alt=""
                className="item-cover"
              />
            </a>
            <a href="#" className="btn-light">
              <i class="fa fa-eye" /> Project
            </a>
            <a href="#" className="btn-dark">
              <i class="fab fa-github" /> github
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/bradtraversy/modern_portfolio/master/dist/img/projects/project5.jpg"
                alt=""
                className="item-cover"
              />
            </a>
            <a href="#" className="btn-light">
              <i class="fa fa-eye" /> Project
            </a>
            <a href="#" className="btn-dark">
              <i class="fab fa-github" /> github
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Work;
