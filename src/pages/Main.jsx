import React from "react";
import Newsletter from "../components/Newsletter/Newsletter";
import Tabs from "../components/Tab/Tabs";
import { varieties, tomatoVarieties, nutritionalValues, tabs } from "../data";
import tomatoImage from "../images/tomato.jpg";
import "./Main.scss";

const Main = () => (
  <div id="main" className="wrapper">
    <div className="content">
      <div className="content__left left">
        <img className="left__image" src={tomatoImage} alt="tomatoes" />
        <h2 className="left__title">Varieties</h2>

        <div className="left__description">
          <p>{varieties}</p>
        </div>
        <ul>
          {tomatoVarieties.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="content__right right">
        <div>
          <p>
            <strong>Red tomatoes, raw</strong>
          </p>
          <p>Nutritional value per 100g (3.5 oz)</p>
        </div>

        <div className="right__table">
          <div className="right__body">
            <div className="right__line">
              <span>Energy</span>
              <span>74kj(18kcal)</span>
            </div>

            {nutritionalValues.map((item) => (
              <div key={item.energy} className="right__line">
                <span>{item.energy}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="right__footer">
            Percentages are relative to US recommendations for adults. Source:
            <a
              className="right__link"
              href="https://ndb.nal.usda.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              USDA Nutrient Database
            </a>
          </div>
        </div>
      </div>
    </div>
    <Tabs tabs={tabs} />
    <Newsletter />
  </div>
);

export default Main;
