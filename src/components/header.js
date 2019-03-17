import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Back = <Link to="/"><img className="Back" src={require("../photos/Frame1.png")} /></Link>;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  render() {
    return (
      <div className={this.props.transparent ? "Header1" : "Header"}>
        {this.props.back ? Back : null}
        <h1>{this.state.title}</h1>
        <img src={require("../photos/logo.svg.png")} />
      </div>
    );
  }
}

Header.defaultProps = { title: "留洋锦囊" };
