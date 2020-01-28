import React, {useContext} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import {Context} from "../../context";
import Head from "./head/head";


const Main = (props) => {
    const {isLoggedIn} = useContext(Context);
    console.log(isLoggedIn);

    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
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
export default Main;




