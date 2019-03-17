import React from "react";
import "./school-card.css";

export default class SchoolCard extends React.Component {
  render() {
    return (
      <div className="SchoolCard">
        <div className="Photo" />
        <h1>瑞典 | 查尔姆斯理工</h1>
        <h2>Chalmers Institute of Technology</h2>
      </div>
    );
  }
}
