import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Map from "./Map";
import Profile from "./Profile";


function Header(state) {
    return (
        <div>
            <div className={'header'}>
                <div className={'header__wrap'}>
                    <Link to={'/profile'} className={'header__logo'}></Link>
                    <div className={'header__right'}>
                        <NavLink activeClassName="active" className={'header__right-item'}
                                 to={'/profile'}>Профиль</NavLink>
                        <NavLink activeClassName="active" className={'header__right-item'} to={'/map'}>Карта</NavLink>
                        <NavLink exact={true} className={'header__right-item'} to={'/'}>Выйти</NavLink>
                    </div>
                </div>
            </div>
            {state.match.path === '/map'
                ? <Map/>
                : <Profile/>}
        </div>
    );
}

export default Header;
