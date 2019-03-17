import React from "react";
import "./gonglve.css";
import Header from "./components/header";
import { Link } from "react-router-dom";

class Gonglve extends React.Component {
  render() {
    return (
      <div className="Gonglve">
        <Header back transparent/>
        <div className="Container">
          <h2>罗切斯特理工学院</h2>
          <h3>Rochester Institute of Technology</h3>
          <Link to="/map"><img className="Check" src={require("./photos/check.png")} /></Link>
        </div>
      </div>
    );
  }
}

export default Gonglve;
