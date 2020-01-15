import React from 'react';
import Btn from "../shared/Btn";
import TextField from '@material-ui/core/TextField';


let title = 'Регистрация';
let btntext = 'Зарегистрироваться';
let linkBtn = '/map';

function Auth() {
    return (
        <div className={'auth__wrap'}>
            <div className={'auth'}>
                <div className={'auth__left'}>
                    <div className={'auth__logo'}></div>
                </div>
                <div className={'auth__right'}>
                    <div className={'auth__title'}>{title}</div>
                    <div className={'auth__text'}>Уже зарегистрирован? <a to="/registration">Войти</a></div>
                    <div className={'auth__form'}>
                        <form noValidate autoComplete="off">
                            <div className={'auth__line'}>
                                <TextField id="standard-basic" label="Адрес электронной почты"/>
                            </div>
                            <div className={'auth__line'}>
                                <div className={'auth__halfline'}>
                                    <TextField id="standard-basic" label="Имя"/>
                                </div>
                                <div className={'auth__halfline'}>
                                    <TextField id="standard-basic" label="Фамилия"/>
                                </div>
                            </div>
                            <div className={'auth__line'}>
                                <TextField id="password-basic" label="Пароль"/>
                            </div>

                        </form>
                    </div>
                    <div className={'auth__submit-wrap'}>
                        <Btn bnttext={btntext} link={linkBtn}/>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Auth;
