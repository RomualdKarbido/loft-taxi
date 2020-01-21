import React from "react";
import mapboxgl from 'mapbox-gl';


class Vectormap extends React.Component {



    componentDidMount() {
        this.mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        this.mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tdWFsZGNhcmJpZG8iLCJhIjoiY2s1bnVrdGVqMDd3czNnczV5ZXNidmNtMCJ9.bLXOv4cC8uYB87kz2V5Llg';

        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [37.5, 55.8],
            local : 'RU',
            zoom: 13,
            // hash: true,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const style = {

        };

        return <div className='map__render' ref={el => this.mapContainer = el} />;
    }
}

export default Vectormap;
