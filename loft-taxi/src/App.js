import React from 'react';
import './App.scss';
import Auth from "./components/Auth";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () =>  <React.Fragment>
    <Router>
        <Switch>
            <Route path="/map" component={Header}/>
            <Route path="/profile" component={Header}/>
            <Route path="/" component={Auth}/>
        </Switch>
    </Router>
</React.Fragment>


export default App;
