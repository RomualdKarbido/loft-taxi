import {Link, NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {Context} from "../../../context";

const Head = () => {
    const {logOut} = useContext(Context);
    return (
        <div className={'header'}>
            <div className={'header__wrap'}>
                <Link to={'/profile'} className={'header__logo'}></Link>
                <div className={'header__right'}>
                    <NavLink activeClassName="active" className={'header__right-item'} to={'/map'}>Карта</NavLink>
                    <NavLink activeClassName="active" className={'header__right-item'} to={'/profile'}>Профиль</NavLink>
                    <div className='header__right-item' onClick={logOut} >Выйти</div>
                </div>
            </div>
        </div>
    )
}

export default Head;
