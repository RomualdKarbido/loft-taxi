import React from "react";
import mapboxgl from 'mapbox-gl';


class Vectormap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 30.355483,
            lat: 59.93168,
            zoom: 10
        };
    }

    componentDidMount() {
        this.mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        this.mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tdWFsZGNhcmJpZG8iLCJhIjoiY2s1bnVrdGVqMDd3czNnczV5ZXNidmNtMCJ9.bLXOv4cC8uYB87kz2V5Llg';

        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            local: 'RU',
        });
    }

    drawRoute = (coordinates) => {
        console.log('рисуем карту');
        console.log(coordinates);

        if (coordinates.length > 0) {

            this.map.flyTo({
                center: coordinates[0],
                zoom: 13
            });

            this.map.addLayer({
                id: "route",
                type: "line",
                source: {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates
                        }
                    }
                },
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": "#ffc617",
                    "line-width": 4
                }
            });
        } else {
            console.log('очищаем карту');
            if (this.map.getLayer('route')) this.map.removeLayer('route');
            this.map.flyTo({
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom
            });
        }
    };

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return <div className='map__render' ref={el => this.mapContainer = el}/>;
    }
}


export default Vectormap
