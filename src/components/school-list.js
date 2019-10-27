import React from "react";
import "./school-list.css";
import SchoolCard from "./school-card";

export default class SchoolList extends React.Component {
  render() {
    return (
      <div className="SchoolList">
        <form action="#">
          <input type="text" placeholder="搜索想了解的学校" />
          <input
            type="image"
            src={require("../photos/search-icon.png")}
            alt="Submit"
          />
        </form>
        <div className="School">
          <SchoolCard />
        </div>
      </div>
    );
  }
}
