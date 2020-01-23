import React from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Map from "./components/map/Map";

import PropTypes from "prop-types";
import {Context} from "./context";


class App extends React.Component {
    static propTypes = {
        aternativerouter: PropTypes.shape({
            href: PropTypes.string,
            comp: PropTypes.any
        }),
    };

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                isLoggedIn: false,
            },
            aternativerouter: {
                href: 'auth',
                comp: <Auth/>
            }
        };
        this.fn = {
            logOut: this.logOut,
            routR1: this.routR1,
            logIn: this.logIn,
        }
    }



    logIn = (email, password) => {
        console.log(email, password);
        this.setState({aternativerouter: {href: 'map', comp: <Map/>}});
    }


    logOut = () => {
        console.log('выход');
        this.setState({userInfo: {isLoggedIn: false}});
        this.setState({aternativerouter: {href: 'auth', comp: <Auth/>}});
    }

    routR1 = (com, link) => { // рендер содержимого приложения
              if (this.state.userInfo.isLoggedIn) {
            this.setState({aternativerouter: {href: link, comp: com}});
        } else {
            this.setState({aternativerouter: {href: 'auth', comp: <Auth/>}});
        }
    };

    render() {
        return (
            <React.Fragment>
                <Context.Provider value={this.fn}>

                    {this.state.aternativerouter.href !== 'auth'
                        ? <Header/>
                        : null
                    }

                    {this.state.aternativerouter.comp}

                </Context.Provider>
            </React.Fragment>
        )
    }
}

export default App;

{/*<Router>*/
}
{/*    <Switch>*/
}
{/*        <Route path="/map" component={Header}/>*/
}
{/*        <Route path="/profile" component={Header}/>*/
}
{/*        <Route path="/" component={Auth}/>*/
}
{/*    </Switch>*/
}
{/*</Router>*/
}
