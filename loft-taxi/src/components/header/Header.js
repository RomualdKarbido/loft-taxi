import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import Auth from "../auth/Auth";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    gotoLink = (comp, link) => {
        this.props.selectcomponen(comp, link);
    }
    upp2 = () => {
        this.props.selectcomponen(<Map/>, 'map');
    }

    render() {

        return (

            <div className='header'>
                <div className={'header__wrap'}>
                    <div className='header__logo' onClick={()=> this.gotoLink(<Profile/>, 'profile')}></div>
                    <div className={'header__right'}>
                        <div className={'header__right-item'} onClick={() => this.gotoLink(<Map/>, 'map')}>Карта</div>
                        <div className={'header__right-item'}
                             onClick={() => this.gotoLink(<Profile/>, 'profile')}>Профиль
                        </div>
                        <div className={'header__right-item'}
                             onClick={() => this.gotoLink(<Auth appp={this.upp2}/>, 'auth')}>Выйти
                        </div>
                    </div>
                </div>
            </div>

            // <div>
            //     <div className={'header'}>
            //         <div className={'header__wrap'}>
            //             <Link to={'/profile'} className={'header__logo'}></Link>
            //             <div className={'header__right'}>
            //                 <NavLink activeClassName="active" className={'header__right-item'} to={'/map'}>Карта</NavLink>
            //                 <NavLink activeClassName="active" className={'header__right-item'} to={'/profile'}>Профиль</NavLink>
            //                 <NavLink exact={true} className={'header__right-item'} to={'/'}>Выйти</NavLink>
            //             </div>
            //         </div>
            //     </div>
            //     {state.match.path === '/map'
            //         ? <Map/>
            //         : <Profile/>}
            // </div>

        );
    }
}

export default Header;
