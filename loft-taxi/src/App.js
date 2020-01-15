import React from 'react';
import './App.scss';

import Auth from "./components/Auth";
import Map from "./components/Map";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const App = () => <div>
    <Router>
        <Switch>
            <Route path="/map" component={Map}></Route>
            <Route path="/"  component={Auth}></Route>
        </Switch>
    </Router>
</div>


export default App;
