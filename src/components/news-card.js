import React from "react";
import "./news-card.css";

export default class NewsCard extends React.Component {
  render() {
    return (
      <div className="NewsCard">
        <div className="Photo" />
        <h1>美国买车指南--如何省钱买好车</h1>
        <h2>11/11/2018</h2>
        <img src={require("../photos/Frame.png")} />
      </div>
    );
  }
}
