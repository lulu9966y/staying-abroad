import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
            <img src={require("../photos/zixun.png")} />
            <img src={require("../photos/jinnang.png")} />
            <img src={require("../photos/shoucang.png")} />
            </div>
        );
    }
}