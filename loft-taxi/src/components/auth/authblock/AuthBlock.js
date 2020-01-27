import React from "react";
import TextField from "@material-ui/core/TextField";


class AuthBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            pass: '',
        }
    }

    goLoginmodal = () => {
        this.props.goLoginModal();
        console.log(this.state);
    };

    render() {
   

        const handleChange = event => {
            this.setState({[event.target.name]: event.target.value});
        };
        return <React.Fragment>
            <div className={'auth__form'}>
                <form noValidate autoComplete="off">
                    <div className={'auth__line'}>
                        <TextField id="standard-basic3"
                                   label="Адрес электронной почты"
                                   name={'email'}
                                   type={'email'}
                                   onChange={handleChange}
                        />
                    </div>
                    <div className={'auth__line'}>
                        <div className={'auth__halfline'}>
                            <TextField
                                id="standard-basic4"
                                label="Имя"
                                name="firstname"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={'auth__halfline'}>
                            <TextField id="standard-basic5"
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
                <div className={'btn'} onClick={this.goLoginmodal}>Зарегистрироваться</div>
            </div>
        </React.Fragment>
    }
}

export default AuthBlock;
