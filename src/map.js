import React from 'react';
import './map.css';
import Header from './components/header'

export default class Map extends React.Component {
    render() {
        return (
            <div className="Map">
            <Header back title="大学速写" />
            <h2>地图</h2>
            <iframe src="https://dreamy-ardinghelli-0fec9d.netlify.com/" width="90%" height="500px" frameborder="0"></iframe>
            </div>
        );
    }
}