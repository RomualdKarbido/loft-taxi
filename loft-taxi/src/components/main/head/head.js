import {Link, NavLink} from "react-router-dom";
import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import {setUserInfo} from "../../../store/loginblock/actions";


const Head = (props) => {
    const history = useHistory();

    const logOut = () => {
        console.log('выход');

        let logInfo = {
            name: '',
            pass: '',
            state: false
        };
        props.setUserInfo(logInfo); // отправляем данные в redux
    };
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


const mapDispatchToProps = {
    setUserInfo
};

export default connect('', mapDispatchToProps)(Head);
