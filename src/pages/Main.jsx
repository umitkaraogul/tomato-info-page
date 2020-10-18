import React from "react";
import Tab from "../components/Tab";
import Newsletter from "../components/Newsletter";
import "./Main.scss";
import tomatoImage from "../images/tomato.jpg";
const Main = () => (
  <div id="main" className="wrapper">
    <div className="Tomato">
      <h1>The Tomato</h1>
      <img className="Tomato__image" src={tomatoImage} alt="Tomato" />
    </div>
    <Tab />
    <Newsletter />
  </div>
);
export default Main;
