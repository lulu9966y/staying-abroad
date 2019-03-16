import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>留洋锦囊</h1>
                <img src={require("../photos/logo.svg.png")} />
            </div>
        );
    }
}