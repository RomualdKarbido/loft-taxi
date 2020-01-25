import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Context} from "../../../context";


const LoginBlock = (props) => {
    const {logIn} = useContext(Context);
    const [name, setNamne] = useState('');
    const [pass, setPass] = useState('');
    const [errnaname, setErrnaname] = useState(false);
    const [errpass, setErrpass] = useState(false);


    const onsubmitBtn = () => {
        if (name.length > 2 && pass.length > 2) {
            logIn(name, pass);
            setErrnaname(false);
            setErrpass(false);
        } else {
            if (name.length <= 2) setErrnaname(true);
            else setErrnaname(false);
            if (pass.length <= 2) setErrpass(true);
            else setErrpass(false);
        }
    }

    return <div>
        <div className={'auth__form'}>
            <form autoComplete="off">
                <div className={'auth__line'}>
                    <TextField id="standard-basicc1"
                               error={errnaname}
                               label="Имя"
                               inputProps={{'data-testid': 'input1'}}

                               name={'name'}
                               onChange={event => setNamne(event.target.value)}
                    />
                </div>
                <div className={'auth__line'}>
                    <TextField id="password-basicc2"
                               error={errpass}
                               inputProps={{'data-testid': 'input2'}}
                               label="Пароль"
                               name={'pass'}
                               type={'password'}
                               onChange={event => setPass(event.target.value)}
                    />
                </div>
            </form>
        </div>
        <div className={'auth__submit-wrap'}>
            <div className={'btn'} data-testid={'btnsend'} onClick={onsubmitBtn}>Войти</div>
        </div>
    </div>

}


export default LoginBlock;
