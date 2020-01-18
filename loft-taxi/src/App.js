import React from 'react';
import './App.scss';
import Auth from "./components/Auth";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Map from "./components/Map";
import Profile from "./components/Profile";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: <Map/>,
            activanename: 'map'
        };
    }

    routR1 = (link, name) => {
        this.setState({active: link, activanename: name});
    }
    upp2 = () => {
       this.routR1(<Map/>, 'map');
    }


    render() {
        return (
            <React.Fragment>

                { this.state.activanename !== 'auth'
                    ? <div className='header'>
                        <div className={'header__wrap'}>
                            <div className={'header__logo'}></div>
                            <div className={'header__right'}>
                                <div  className={'header__right-item'} onClick={() => this.routR1(<Map/>, 'map')}>Карта</div>
                                <div  className={'header__right-item'} onClick={() => this.routR1(<Profile/>, 'profile')}>Профиль</div>
                                <div className={'header__right-item'} onClick={() => this.routR1(<Auth appp={this.upp2} />, 'auth')}>Выйти</div>
                            </div>
                        </div>
                    </div>
                    : ''
                }




                {this.state.active}


                {/*<Router>*/}
                {/*    <Switch>*/}
                {/*        <Route path="/map" component={Header}/>*/}
                {/*        <Route path="/profile" component={Header}/>*/}
                {/*        <Route path="/" component={Auth}/>*/}
                {/*    </Switch>*/}
                {/*</Router>*/}


            </React.Fragment>
        )
    }
}

export default App;
