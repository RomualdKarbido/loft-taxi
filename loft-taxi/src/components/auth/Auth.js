import React, {useState} from 'react';
import AuthBlock from "./authblock/AuthBlock";
import LoginBlock from "./loginblock/LoginBLock";

import {setpreloader, setMessageError} from "../../store/actions";
import {connect} from "react-redux";
import Preloader from "../preloader/preloader";
import {useHistory} from "react-router-dom";


const Auth = (props) => {
    const [loginwin, setLoginwin] = useState('false');
    const [title, setTitle] = useState('Вход');
    const [logined, setLogined] = useState('Зарегистрируйтесь');
    const [loginedtext, setLoginedtext] = useState('Новый пользователь? ');
    const history = useHistory();

    const changeModal = () => {
        if (loginwin) {
            setLoginwin(false);
            setTitle('Регистрация');
            setLogined('Вход');
            setLoginedtext('Уже зарегистрирован? ');

        } else {
            setLoginwin(true);
            setTitle('Вход');
            setLogined('Зарегистрируйтесь');
            setLoginedtext('Новый пользователь? ');
        }
    }

    const getInfoUserStorage = () => {

        let stringInfo = localStorage.getItem('userInfo');
        if (stringInfo) {
            history.push("/map")
        }
    }

    getInfoUserStorage();


    props.setpreloader(false); // прелоадер
    props.setMessageError('');

    if (props.messageerr === 'Пользователь успешно зарегистрирован') {
        setTimeout(()=> {
            setLoginwin(true);
            setTitle('Вход');
            setLogined('Зарегистрируйтесь');
            setLoginedtext('Новый пользователь? ');
        }, 3000);
    }


    return (
        <React.Fragment>
            {props.preloader
                ? <Preloader/>
                : null
            }

            <div className='auth__wrap'>
                <div className={'auth'}>
                    <div className={'auth__left'}>
                        <div className={'auth__logo'}></div>
                    </div>
                    <div className={'auth__right'}>
                        <div data-testid={'tile'} className={'auth__title'}>{title}</div>
                        <div data-testid={'text'} className={'auth__text'}>{loginedtext}
                            <span className={'link'} data-testid={'сhangeModal'} onClick={changeModal}>{logined}</span>
                        </div>
                        {!loginwin
                            ? <AuthBlock/>
                            : <LoginBlock/>}
                    </div>

                </div>
            </div>
            {
                props.messageerr.length
                    ? <div className='auth__error'>{props.messageerr}</div>
                    : null
            }

        </React.Fragment>
    );

}
const mapStateToProps = state => {
    return ({
        preloader: state.pleloader.preloaderState,
        messageerr: state.messageErrorReducer.err
    });
}
const mapDispatchToProps = {
    setpreloader, setMessageError
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
