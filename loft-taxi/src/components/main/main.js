import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import Head from "./head/head";
import {useSelector} from "react-redux";

const Main = (props) => {
    const isLodined = useSelector(state => state.lloginblock.state);


    if (isLodined) {
        return (
            <React.Fragment>
                <Head/>
                <Switch>
                    <Route path="/map" component={Map}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </React.Fragment>
        )
    } else {
       return <Redirect to={'/'}/>
    }
};

export default Main;


