import React, {useState} from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";
import Main from "./components/main/main";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import rootReducer from './store/reducers'
import {authMiddleware, registrMiddleware} from './store/middlewares'


const App = () => {



    const store = createStore(
        rootReducer,
        compose(applyMiddleware(authMiddleware, registrMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        ));
    // store.subscribe(x => {
    //     console.log('подписка из app', store.getState().lloginblock.state);
    //     if (store.getState().lloginblock.state) {
    //         console.log('адец');
    //     }
    // });

    return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/map" component={Main}/>
                        <Route path="/profile" component={Main}/>
                        <Route path="/" component={Auth}/>
                    </Switch>
                </Router>
            </Provider>
    )
}

export default App;


