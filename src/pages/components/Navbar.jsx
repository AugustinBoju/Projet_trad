import React from "react";
import { Link } from "react-router-dom";
import Fr from "../../images/fr.png";
import En from "../../images/en.png";

const Navbar = ({ language, changeLanguage }) => {
  return (
    <div  className="navbar-lg">
    <br/>
    {language === "en" && (
      <>
      <Link to="/" className="btn-lg btn-primary">Home</Link>
      <Link to="/about" className="btn-lg btn-light">About</Link>
      <Link to="/works" className="btn-lg btn-danger">Works</Link>
      </>
    )}
    {language === "fr" && (
      <>
      <Link to="/" className="btn-lg btn-primary">Menu</Link>
      <Link to="/about" className="btn-lg btn-light">À propos</Link>
      <Link to="/works" className="btn-lg btn-danger">Travaux</Link>
      </>
    )}
      {language === "fr" && (
        <img src={En} alt="" onClick={changeLanguage} className="float-right" style={{borderRadius: '100%', width: '13%'}}/>
      )}
      {language === "en" && (
        <img src={Fr} alt="" onClick={changeLanguage} className="float-right" style={{borderRadius: '100%'}}/>
      )}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {language === "fr" && (
        <p className="float-right">Francais 2020</p>
      )}
      {language === "en" && (
        <p className="float-right">English 2020</p>
      )}
    </div>
  );
};

export default Navbar;
