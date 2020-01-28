import React, {useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import Head from "./head/head";
import {connect} from "react-redux";


const Main = (props) => {

    console.log('залиогиненность', props.isLoggedIn);

    if (!props.isLoggedIn) {
        return <Redirect path="/"/>
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
    console.log(state.lloginblock);
    return  ({isLoggedIn: state.lloginblock.state});
}



export default connect(mapStateToProps, '')(Main);
// export default Main;


