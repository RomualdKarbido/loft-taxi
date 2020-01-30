import React from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setLogOut} from "../../../store/actions";


const Head = (props) => {
    const logOut = () => {
        console.log('выход');

        props.setLogOut(); // обнуляем данные в redux
    };
    return (
        <div className={'header'}>
            <div className={'header__wrap'}>
                <Link to={'/profile'} className={'header__logo'}></Link>
                <div className='header__user'>Вы вошли как: {props.username}</div>
                <div className={'header__right'}>
                    <NavLink activeClassName="active" className={'header__right-item'} to={'/map'}>Карта</NavLink>
                    <NavLink activeClassName="active" className={'header__right-item'} to={'/profile'}>Профиль</NavLink>
                    <div className='header__right-item' onClick={logOut} >Выйти</div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return ({username: state.lloginblock.name});
}

const mapDispatchToProps = {
    setLogOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);
