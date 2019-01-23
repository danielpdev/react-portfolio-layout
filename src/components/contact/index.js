import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span> jhondoe@test.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span> (555) 555-5555
          </div>
          <div>
            <span className="text-secondary">Address:</span> 50 Main streen 101
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Contact;
