import React from "react";
import TextField from "@material-ui/core/TextField";
import Btn from "../../shared/Btn";

class LoginBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: ''
        }
    }
    ap = () => {
        this.props.ap();
        console.log(this.state);
    }


    render() {
        // const {name, pass} = this.state;
        const handleChange = event => {
            this.setState({[event.target.name]: event.target.value});
        }

        return <div>
            <div className={'auth__form'}>
                <form noValidate autoComplete="off">
                    <div className={'auth__line'}>
                        <TextField id="standard-basicc1"
                                   label="Имя"
                                   name={'name'}
                                   onChange={handleChange}
                        />
                    </div>
                    <div className={'auth__line'}>
                        <TextField id="password-basicc2"
                                   label="Пароль"
                                   name={'pass'}
                                   type={'password'}
                                   onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
            <div className={'auth__submit-wrap'}>
                {/*<Btn bnttext="Войти" link={'/map'} st={this.state}/>*/}
                <div className={'btn'} onClick={this.ap}>Зарегистрироваться</div>
            </div>
        </div>

    }

}

export default LoginBlock;
