import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLogOut} from "../../../store/actions";


const Head = (props) => {

    const dispatch = useDispatch();
    let username = useSelector(state => state.lloginblock.name);

    const logOut = () => {
        dispatch(setLogOut()); // обнуляем данные в redux
    };


    return (
        <div className='header'>
            <div className={'header__wrap'}>
                <Link to={'/profile'} className={'header__logo'}></Link>
                <div className='header__user'>{username}</div>
                <div className={'header__right'}>
                    <NavLink activeClassName="active" className={'header__right-item'}
                             to={'/map'}><span>Карта</span></NavLink>
                    <NavLink activeClassName="active" className={'header__right-item'}
                             to={'/profile'}><span>Профиль</span></NavLink>
                    <div className='header__right-item' onClick={logOut}><span>Выйти</span></div>
                </div>
            </div>
        </div>
    )
}


export default Head;
