import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {setRegistration} from "../../../store/actions";
import {useDispatch} from "react-redux";


const AuthBlock = (props) => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();

    const registr = () => {
        let registrInfo = {email, firstname, lastname, password};
        dispatch(setRegistration(registrInfo));
    }


    return <React.Fragment>

        <div className={'auth__form'}>
            <form noValidate autoComplete="off">
                <div className={'auth__line'}>
                    <TextField id="standard-basic3"
                               label="Адрес электронной почты"
                               name={'email'}
                               type={'email'}
                               onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className={'auth__line'}>
                    <div className={'auth__halfline'}>
                        <TextField
                            id="standard-basic4"
                            label="Имя"
                            name="firstname"
                            onChange={event => setFirstname(event.target.value)}
                        />
                    </div>
                    <div className={'auth__halfline'}>
                        <TextField id="standard-basic5"
                                   label="Фамилия"
                                   name={'lastname'}
                                   onChange={event => setLastname(event.target.value)}
                        />
                    </div>
                </div>
                <div className={'auth__line'}>
                    <TextField id="standard"
                               label="Пароль"
                               type="password"
                               name={'pass'}
                               onChange={event => setPassword(event.target.value)}
                    />
                </div>
            </form>
        </div>
        <div className={'auth__submit-wrap'}>
            <div className={'btn'} onClick={registr}><span>Зарегистрироваться</span></div>
        </div>
    </React.Fragment>

}

export default AuthBlock;
