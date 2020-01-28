import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useHistory} from "react-router-dom";

import {connect} from "react-redux";
import {setUserInfo} from '../../../store/loginblock/actions'






const LoginBlock = (props) => {


    const [name, setNamne] = useState('');
    const [pass, setPass] = useState('');
    const [errnaname, setErrnaname] = useState(false);
    const [errpass, setErrpass] = useState(false);

    const history = useHistory();


    const onsubmitBtn = () => {

        if (name.length > 2 && pass.length > 2) {
            // logIn(name, pass);
            setErrnaname(false);
            setErrpass(false);

            let logInfo = {
                name: name,
                pass: pass,
                state: true
            };
            props.setUserInfo(logInfo); // отправляем данные в redux
            history.push("/map"); // переходим на карту

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


const mapDispatchToProps = {
    setUserInfo
}


export default connect('', mapDispatchToProps )(LoginBlock);
