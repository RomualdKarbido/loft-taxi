import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import {Context} from "../../../context";


const LoginBlock = (props) => {

    const [name, setNamne] = useState('');
    const [pass, setPass] = useState('');
    const {logIn} = useContext(Context);


    return <div>
        <div className={'auth__form'}>
            <form noValidate autoComplete="off">
                <div className={'auth__line'}>
                    <TextField id="standard-basicc1"
                               label="Имя"
                               name={'name'}
                               onChange={event => setNamne(event.target.value)}
                    />
                </div>
                <div className={'auth__line'}>
                    <TextField id="password-basicc2"
                               label="Пароль"
                               name={'pass'}
                               type={'password'}
                               onChange={event => setPass(event.target.value)}
                    />
                </div>
            </form>
        </div>
        <div className={'auth__submit-wrap'}>
            <div className={'btn'} onClick={() => logIn(name, pass)}>Войти</div>
        </div>
    </div>

}


export default LoginBlock;
