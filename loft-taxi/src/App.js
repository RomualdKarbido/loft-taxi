import React from 'react';
import './App.scss';

import Auth from "./components/Auth";
import Map from "./components/Map";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Profile from "./components/profile";

const App = () => <div>
    <Router>
        <Switch>
            <Route path="/map" component={Map}/>
            <Route path="/profile"  component={Profile}/>
            <Route path="/"  component={Auth}/>
        </Switch>
    </Router>
</div>


export default App;
