import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers";
import {authMiddleware, registrMiddleware, logOutMiddleware} from "./store/middlewares";
import {setLogOut, setUserAcitve, setUserToken} from "./store/actions";
import {BrowserRouter as Router} from "react-router-dom";

import createSagaMiddleWare from 'redux-saga';
import {
    authorizationSaga,
    registrationSaga,
    logOutSaga,
    addressListSaga,
    paymentSaga,
    getPayInfoSaga,
    routeSaga
} from './store/sagas'

const sagaMiddleware = createSagaMiddleWare();


const store = createStore(
    rootReducer,
    // compose(applyMiddleware(authMiddleware, registrMiddleware, logOutMiddleware),
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    ));

sagaMiddleware.run(authorizationSaga);
sagaMiddleware.run(registrationSaga);
sagaMiddleware.run(logOutSaga);
sagaMiddleware.run(addressListSaga);
sagaMiddleware.run(paymentSaga);
sagaMiddleware.run(getPayInfoSaga);
sagaMiddleware.run(routeSaga);


const stringInfo = JSON.parse(localStorage.getItem('userInfo'));

if (stringInfo) {
    store.dispatch(setUserAcitve({state: true, name: stringInfo.email}));
    store.dispatch(setUserToken({token: stringInfo.token}));
} else {
    store.dispatch(setLogOut());
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
