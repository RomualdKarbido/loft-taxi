import React from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Context} from "./context";
import Main from "./components/main/main";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }


    logIn = (email, password) => {
        console.log(email, password);
        this.setState({isLoggedIn: true});
    };


    logOut = () => {
        console.log('выход');
        this.setState({isLoggedIn: false});
    };




    render() {
        return (
            <Context.Provider value={{
                logIn: this.logIn,
                logOut: this.logOut,
                isLoggedIn: this.state.isLoggedIn}}
            >
                <Router>
                    <Switch>
                        <Route path="/map" component={Main}/>
                        <Route path="/profile" component={Main}/>
                        <Route path="/" component={Auth}/>
                    </Switch>
                </Router>
            </Context.Provider>
        )
    }
}


export default App;


