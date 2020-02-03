import React from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";
import Main from "./components/main/main";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import rootReducer from './store/reducers'
import {authMiddleware, registrMiddleware} from './store/middlewares'

import createSagaMiddleWare from 'redux-saga';
import {testSaga} from './store/sagas'


const sagaMiddleware = createSagaMiddleWare();


const App = () => {

    const store = createStore(
        rootReducer,
        compose(applyMiddleware(authMiddleware, registrMiddleware, sagaMiddleware),
        // compose(applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        ));
    // sagaMiddleware.run(testSaga);

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


