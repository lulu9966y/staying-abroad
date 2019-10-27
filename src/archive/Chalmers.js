import React, { Component } from "react";
import "../gonglve.css";
import Header from "../components/header";
import { Link } from "react-router-dom";
import ChalmersData from "../data/Chalmers.json";

export class Chalmers extends Component {
  render() {
    return (
      <div
        className="Gonglve"
        style={{ backgroundImage: `url(${ChalmersData.image})` }}
      >
        <Header back transparent />
        <div className="Container">
          <h2>{ChalmersData.Chinese}</h2>
          <h3>{ChalmersData.English}</h3>
          <Link to="/">
            <img className="Check" src={require("../photos/check.png")} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Chalmers;
