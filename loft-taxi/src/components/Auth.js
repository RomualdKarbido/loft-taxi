import React from 'react';
import Btn from "../shared/Btn";
import TextField from '@material-ui/core/TextField';


let btntext = 'Зарегистрироваться';
let linkBtn = '/map';


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
            this.setState({loginwin: false, title: 'Вход', logined: 'Зарегистрируйтесь', loginedtext: 'Новый пользователь? '})
            : this.setState({loginwin: true, title: 'Регистрация', logined: 'Вход', loginedtext: 'Уже зарегистрирован? ',});
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


// два состояния окна логина

const AuthBlock = () => {
    return <div>
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
}
const LoginBlock = () => {
    return <div>
        <div className={'auth__form'}>
            <form noValidate autoComplete="off">
                <div className={'auth__line'}>
                    <TextField id="standard-basic" label="Имя"/>
                </div>
                <div className={'auth__line'}>
                    <TextField id="password-basic" label="Пароль"/>
                </div>
            </form>
        </div>
        <div className={'auth__submit-wrap'}>
            <Btn bnttext="Войти" link={linkBtn}/>
        </div>
    </div>
}

export default Auth;
