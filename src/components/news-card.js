import React from "react";
import "./news-card.css";
import Articles from "../data/articles.json";
import { Link } from "react-router-dom";

export default class NewsCard extends React.Component {
  render() {
    return (
      <div className="NewsCardContainer">
        {Articles.map(article => {
          return (
            <div className="NewsCard">
              <div
                className="Photo"
                style={{
                  backgroundImage: `url(${article.photo})`
                }}
              />
              <h1>{article.title}</h1>
              <h2>{article.date}</h2>
              <img src={require("../photos/Frame.png")} />
            </div>
          );
        })}
      </div>
    );
  }
}
