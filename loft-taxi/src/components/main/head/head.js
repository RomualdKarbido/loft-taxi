import React from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLogOut} from "../../../store/actions";


const Head = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const logOut = () => {
        console.log('выход');
        localStorage.removeItem('userInfo');
        dispatch(setLogOut()); // обнуляем данные в redux
        history.push("/map")
    };
    const username = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <div className='header'>
            <div className={'header__wrap'}>
                <Link to={'/profile'} className={'header__logo'}></Link>
                <div className='header__user'>{username.email}</div>
                <div className={'header__right'}>
                    <NavLink activeClassName="active" className={'header__right-item'} to={'/map'}>Карта</NavLink>
                    <NavLink activeClassName="active" className={'header__right-item'} to={'/profile'}>Профиль</NavLink>
                    <div className='header__right-item' onClick={logOut}>Выйти</div>
                </div>
            </div>
        </div>
    )
}


export default Head;
