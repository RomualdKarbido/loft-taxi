import React from 'react';
import './App.scss';

import Auth from "./components/Auth";
import Map from "./components/Map";
import Profile from "./components/profile";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
