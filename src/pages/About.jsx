import React from "react";
import { FormattedMessage } from "react-intl";
import Ex from "../images/expert.png";

const About = () => {
  return (
    <div className="container">
      <div className="text-center">
        <img src={Ex} alt=""/>
        <h1><FormattedMessage id="about.title" /></h1>
        <p><FormattedMessage id="about.paragraph" /></p>
      </div>
    </div>
  );
};

export default About;
