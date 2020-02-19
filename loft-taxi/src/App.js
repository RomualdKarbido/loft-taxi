import React from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";
import Main from "./components/main/main";
import Preloader from "./components/preloader/preloader";
import {Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";


const App = () => {

    const preloader = useSelector(state => state.pleloader.preloaderState);
    return (
        <React.Fragment>
            {preloader ? <Preloader/> : null}
            <Switch>
                <Route exact path="/profile" component={Main}/>
                <Route exact path="/map" component={Main}/>
                <Route path="/" component={Auth}/>
            </Switch>

        </React.Fragment>
    )
};

export default App;


// return <Redirect  to={'/'}/>
