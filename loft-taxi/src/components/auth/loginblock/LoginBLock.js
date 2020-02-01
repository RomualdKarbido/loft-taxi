import React, {useState, useEffect, useRef} from "react";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {setUserInfo} from '../../../store/actions'
import {useForm} from "react-hook-form";

const LoginBlock = (props) => {

    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const [errnaname, setErrnaname] = useState(false);
    const [errpass, setErrpass] = useState(false);


    const onSubmit = (data) => {
        if (data.name.length > 2 && data.pass.length > 2) {
            setErrnaname(false);
            setErrpass(false);
            dispatch(setUserInfo(data)); // отправляем данные в redux
        } else {
            if (data.name.length <= 2) setErrnaname(true);
            else setErrnaname(false);
            if (data.pass.length <= 2) setErrpass(true);
            else setErrpass(false);
        }
    };


    return <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className={'auth__form'}>
            <div>
                <div className={'auth__line'}>
                    <TextField id="standard-basicc1"
                               error={errnaname}
                               label="E-mail"
                               inputProps={{'data-testid': 'input1'}}
                               defaultValue={'test5@test.com'}
                               name={'name'}
                               inputRef={register}
                    />
                </div>
                <div className={'auth__line'}>
                    <TextField id="password-basicc2"
                               error={errpass}
                               inputProps={{'data-testid': 'input2'}}
                               label="Пароль"
                               name={'pass'}
                               type={'password'}
                               inputRef={register}
                    />
                </div>
            </div>
        </div>
        <div className={'auth__submit-wrap'}>
            <div className={'btn'} data-testid={'btnsend'} onClick={handleSubmit(onSubmit)}><span>Войти</span></div>
        </div>
    </form>

}


export default LoginBlock;
