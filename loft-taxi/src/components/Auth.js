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


// два состояния окна логина

class AuthBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {mail, firstname, lastname, pass} = this.state;
        const handleChange = event => {
            this.setState({[event.target.name]: event.target.value});
        };
        return <div>
            <div className={'auth__form'}>
                <form noValidate autoComplete="off">
                    <div className={'auth__line'}>
                        <TextField id="standard-basic"
                                   label="Адрес электронной почты"
                                   name={'mail'}
                                   onChange={handleChange}
                        />
                    </div>
                    <div className={'auth__line'}>
                        <div className={'auth__halfline'}>
                            <TextField
                                id="standard-basic"
                                label="Имя"
                                name="firstname"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={'auth__halfline'}>
                            <TextField id="standard-basic"
                                       label="Фамилия"
                                       name={'lastname'}
                                       onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={'auth__line'}>
                        <TextField id="standard"
                                   label="Пароль"
                                   type="password"
                                   name={'pass'}
                                   onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
            <div className={'auth__submit-wrap'}>
                <Btn bnttext={btntext} link={linkBtn} st={this.state}/>
            </div>
        </div>
    }

}

class LoginBlock extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const {name, pass} = this.state;
        const handleChange = event => {
            this.setState({[event.target.name]: event.target.value});
        }

        return <div>
            <div className={'auth__form'}>
                <form noValidate autoComplete="off">
                    <div className={'auth__line'}>
                        <TextField id="standard-basic"
                                   label="Имя"
                                   name={'name'}
                                   onChange={handleChange}
                        />
                    </div>
                    <div className={'auth__line'}>
                        <TextField id="password-basic"
                                   label="Пароль"
                                   label="Имя"
                                   name={'pass'}
                                   type={'password'}
                                   onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
            <div className={'auth__submit-wrap'}>
                <Btn bnttext="Войти" link={linkBtn} st={this.state}/>
            </div>
        </div>

    }

}

export default Auth;
