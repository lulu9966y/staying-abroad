import React from "react";
import "./school-card.css";
import Schools from "../data/schools.json";
import { Link } from "react-router-dom";

export default class SchoolCard extends React.Component {
  render() {
    return (
      <div className="SchoolCardContainer">
        {Schools.map(school => {
          return (
            <Link to={"./" + school.index} className="SchoolCard">
              <div
                className="Photo"
                style={{
                  backgroundImage: `url(${school.image})`
                }}
              />
              <h1>{school.Chinese}</h1>
              <h2>{school.English}</h2>
            </Link>
          );
        })}
      </div>
    );
  }
}
