import React from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./components/main/main";

import {createStore} from "redux";
import {Provider} from 'react-redux'
import rootReducer from './store/reducers'




const App = () => {
const store = createStore(rootReducer);

store.subscribe(x => {

    console.log( 'подписка из app' ,store.getState());
});


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


