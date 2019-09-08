import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const zixun = <img src={require("../photos/zixun.png")} />;
const jinnang = <img src={require("../photos/jinnang.png")} />;
const zixun1 = <img src={require("../photos/red-z.png")} />;
const jinnang1 = <img src={require("../photos/red-j.png")} />;

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Link to="/">{this.props.kind == "zixun" ? zixun1 : zixun}</Link>
        <Link to="/jinnang">
          {this.props.kind == "jinnang" ? jinnang1 : jinnang}
        </Link>
        <img src={require("../photos/shoucang.png")} />
      </div>
    );
  }
}
