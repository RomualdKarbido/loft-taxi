import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import Head from "./head/head";
import {connect} from "react-redux";


const Main = (props) => {

    let stringInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!stringInfo) {
        return <Redirect  to={'/'}/>
    } else {
        return (
            <React.Fragment>
                <Head/>
                <Switch>
                    <Route path="/map" component={Map}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </React.Fragment>
        )
    }

};

const mapStateToProps = state => {
    return ({isLoggedIn: state.lloginblock.state});
}


export default connect(mapStateToProps, '')(Main);


