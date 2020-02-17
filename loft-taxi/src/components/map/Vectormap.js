import React from "react";
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux'


class Vectormap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 30.355483,
            lat: 59.93168,
            zoom: 10,
            draw: true,
            statemap: false
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
            local: 'RU'
        });
        this.loadMap();
    }


    loadMap() {
        this.map.on('load', () => {
            this.setState({statemap: true});
            if (this.props.routepoints.length > 0) {
                this.drawRoute(this.props.routepoints);
            }
        });
    };

    drawRoute = (coordinates) => {

        if (this.state.statemap) {

            if (this.state.draw) {
                this.map.flyTo({
                    center: coordinates[3],
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
                        "line-width": 8
                    }
                });
                this.setState({draw: false});
            } else {
                this.map.removeLayer("route");
                this.map.removeSource("route");

                this.map.flyTo({
                    center: [this.state.lng, this.state.lat],
                    zoom: this.state.zoom
                });
                this.setState({draw: true});
            }
        }
    };


    componentDidUpdate(prevProps) {

        if (this.props.routepoints !== prevProps.routepoints) {
            if (this.props.routepoints.length > 0) {
                this.drawRoute(this.props.routepoints);
            } else {
                if (this.map.getLayer('route')) {
                    this.drawRoute(this.props.routepoints);
                }
            }
        }
    };


    componentWillUnmount() {
        this.map.remove();
    };

    render() {
        return <div className='map__render' ref={el => this.mapContainer = el}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        routepoints: state.routerPointReducer.points
    }
};


export default connect(mapStateToProps)(Vectormap);
