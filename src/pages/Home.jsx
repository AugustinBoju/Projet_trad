import React from "react";
import { FormattedMessage } from "react-intl";
import Ex from "../images/expert.png";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center">
        <img src={Ex} alt=""/>
        <h1><FormattedMessage id="home.title" /></h1>
        <p><FormattedMessage id="home.paragraph" /></p>
      </div>
    </div>
  );
};

export default Home;
