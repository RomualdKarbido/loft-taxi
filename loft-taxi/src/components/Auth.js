import React from 'react';
import AuthBlock from "./auth/AuthBlock";
import LoginBlock from "./auth/LoginBLock";


class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginwin: true,
            title: 'Регистрация',
            logined: 'Вход',
            loginedtext: 'Уже зарегистрирован? ',
        };
    }

    changeModal = () => {
        this.state.loginwin ?
            this.setState({
                loginwin: false,
                title: 'Вход',
                logined: 'Зарегистрируйтесь',
                loginedtext: 'Новый пользователь? '
            })
            : this.setState({
                loginwin: true,
                title: 'Регистрация',
                logined: 'Вход',
                loginedtext: 'Уже зарегистрирован? ',
            });
    }

    render() {
        return (
            <div className={'auth__wrap'}>
                <div className={'auth'}>
                    <div className={'auth__left'}>
                        <div className={'auth__logo'}></div>
                    </div>
                    <div className={'auth__right'}>
                        <div className={'auth__title'}>{this.state.title}</div>
                        <div className={'auth__text'}>{this.state.loginedtext}
                            <span className={'link'} onClick={this.changeModal}>{this.state.logined}</span>
                        </div>
                        {this.state.loginwin
                            ? <AuthBlock/>
                            : <LoginBlock/>}
                    </div>

                </div>
            </div>
        );
    }
}


export default Auth;
