import React, {useState, useEffect, useRef} from "react";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {setUserInfo} from '../../../store/actions'

const LoginBlock = (props) => {

    const dispatch = useDispatch();

    const [name, setNamne] = useState('');
    const [pass, setPass] = useState('');
    const [errnaname, setErrnaname] = useState(false);
    const [errpass, setErrpass] = useState(false);


    const onsubmitBtn = () => {

        if (name.length > 2 && pass.length > 2) {
            setErrnaname(false);
            setErrpass(false);

            let logInfo = {
                name: name,
                pass: pass
            };
            dispatch(setUserInfo(logInfo)); // отправляем данные в redux
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
                               label="E-mail"
                               inputProps={{'data-testid': 'input1'}}
                               defaultValue={'test5@test.com'}
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
            <div className={'btn'} data-testid={'btnsend'} onClick={onsubmitBtn}><span>Войти</span></div>
        </div>
    </div>

}


export default LoginBlock;
