import React from "react";
import "./main.css";
import NewsCard from "./news-card";

export default class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <form action="#">
          <input type="text" placeholder="搜索想了解的内容" />
          <input
            type="image"
            src={require("../photos/search-icon.png")}
            alt="Submit"
          />
        </form>
        <div className="News">
          <NewsCard />
        </div>
      </div>
    );
  }
}
