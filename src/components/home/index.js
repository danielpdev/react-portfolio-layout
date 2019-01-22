import React from "react";
import { Link } from "react-router-dom";
const Home = props => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Daniel <span className="text-secondary">Popa</span>
      </h1>
      <h2 className="sm-heading">
        Web developer, Programmer and Entrepreneuer
      </h2>
      <div className="icons">
        <Link to="#">
          <i className="fab fa-twitter fa-2x" />
        </Link>
        <Link to="#">
          <i className="fab fa-facebook fa-2x" />
        </Link>
        <Link to="#">
          <i className="fab fa-linkedin fa-2x" />
        </Link>
        <Link to="#">
          <i className="fab fa-github fa-2x" />
        </Link>{" "}
      </div>
    </main>
  );
};

export default Home;
