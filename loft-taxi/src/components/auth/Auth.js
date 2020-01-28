import React from 'react';
import AuthBlock from "./authblock/AuthBlock";
import LoginBlock from "./loginblock/LoginBLock";

import PropTypes from "prop-types";


class Auth extends React.Component {

    static propTypes = {
        loginwin: PropTypes.bool,
        title: PropTypes.string,
        logined: PropTypes.string,
        loginedtext: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            loginwin: false,
            title: 'Вход',
            logined: 'Зарегистрируйтесь',
            loginedtext: 'Новый пользователь? ',
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

    goLoginModal = () => {
        this.setState({loginwin: false});
        this.changeModal();
    }


    render() {
        return (
            <div className={'auth__wrap'}>
                <div className={'auth'}>
                    <div className={'auth__left'}>
                        <div className={'auth__logo'}></div>
                    </div>
                    <div className={'auth__right'}>
                        <div data-testid={'tile'} className={'auth__title'}>{this.state.title}</div>
                        <div data-testid={'text'} className={'auth__text'}>{this.state.loginedtext}
                            <span className={'link'}  data-testid={'сhangeModal'} onClick={this.changeModal}>{this.state.logined}</span>
                        </div>
                        {this.state.loginwin
                            ? <AuthBlock  goLoginModal={this.goLoginModal}/>
                            : <LoginBlock/>}
                    </div>

                </div>
            </div>
        );
    }
}


export default Auth;
