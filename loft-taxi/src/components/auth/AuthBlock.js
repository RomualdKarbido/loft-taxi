import React from "react";
import TextField from "@material-ui/core/TextField";
import Btn from "../../shared/Btn";

class AuthBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            pass: ''
        }
    }

    render() {
        // const {email, firstname, lastname, pass} = this.state;

        const handleChange = event => {
            this.setState({[event.target.name]: event.target.value});
        };
        return <div>
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
                <Btn bnttext={'Зарегистрироваться'} link={'/map'} st={this.state}/>
            </div>
        </div>
    }
}

export default AuthBlock;
