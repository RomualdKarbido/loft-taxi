import React from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Map from "./components/map/Map";

import PropTypes from "prop-types";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aternativerouter: {
                href: 'auth',
                comp: <Auth appp={this.upp2}/>
            }
        };
        this.state.propTypes = {
            href: PropTypes.string,
            comp: PropTypes.any
        };
    }

    routR1 = (com, link) => {
        this.setState({aternativerouter: {href: link, comp: com}});
    }
    upp2 = () => {
        this.setState({aternativerouter: {href: 'map', comp: <Map/>}});
    }


    render() {
        return (
            <React.Fragment>

                {this.state.aternativerouter.href !== 'auth'
                    ? <Header selectcomponen={(com, link) => this.routR1(com, link)}/>
                    : ''
                }


                {this.state.aternativerouter.comp}


                {/*<Router>*/}
                {/*    <Switch>*/}
                {/*        <Route path="/map" component={Header}/>*/}
                {/*        <Route path="/profile" component={Header}/>*/}
                {/*        <Route path="/" component={Auth}/>*/}
                {/*    </Switch>*/}
                {/*</Router>*/}


            </React.Fragment>
        )
    }
}

export default App;
