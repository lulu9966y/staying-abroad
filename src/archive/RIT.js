import React, { Component } from "react";
import "../gonglve.css";
import Header from "../components/header";
import { Link } from "react-router-dom";
import RITdata from "../data/RIT.json";

export class RIT extends Component {
  state = {
    transparent: true
  };

  handleClick = e => {
    this.setState({
      transparent: false
    });
    e.target.parentNode.parentNode.style.display = "none";
  };

  handleStyle = e => {
    e.target.nextSibling.style.display = "block";
  };

  handleStyle1 = e => {
    e.target.style.display = "none";
  };

  render() {
    const items = [];
    for (const property in RITdata.content) {
      items.push(
        <div>
          <div className="item" onClick={this.handleStyle}>
            {property}
          </div>
          <div
            className="detail"
            style={{ display: "none" }}
            onClick={this.handleStyle1}
          >
            {RITdata.content[property]}
          </div>
        </div>
      );
    }

    return (
      <div className="Gonglve">
        <div
          className="Container"
          style={{ backgroundImage: `url(${RITdata.image})` }}
        >
          <h2>{RITdata.Chinese}</h2>
          <h3>{RITdata.English}</h3>
          <a href="#Menu" onClick={this.handleClick}>
            <img className="Check" src={require("../photos/check.png")} />
          </a>
        </div>
        {this.state.transparent ? <Header back transparent /> : <Header back />}
        <div id="Menu">{items}</div>
      </div>
    );
  }
}

export default RIT;
