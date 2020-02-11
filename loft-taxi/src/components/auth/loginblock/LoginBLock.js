import React from "react";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {setUserInfo} from '../../../store/actions'
import {useForm} from "react-hook-form";
import * as yup from 'yup'; // for everything


const SignupSchema = yup.object().shape({
    name: yup.string().required().min(3).max(20).email('Invalid email'),
    pass: yup.string().required().min(3).max(20)
});

const LoginBlock = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm({
        validationSchema: SignupSchema
    });
    const onSubmit = (data) => {
        dispatch(setUserInfo(data));
    };

    const hasError = (inputName) => !!(errors[inputName]); // обработчик ошибок

    return <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className={'auth__form'}>
            <div>
                <div className={'auth__line'}>
                    <TextField id="standard-basicc1"
                               error={hasError('name')}
                               label="E-mail"
                        // inputProps={{'data-testid': 'input1'}}
                               defaultValue={'test5@test.com'}
                               name={'name'}
                               inputRef={register}
                    />

                </div>
                <div className={'auth__line'}>
                    <TextField id="password-basicc2"

                               error={hasError('pass')}
                        // inputProps={{'data-testid': 'input2'}}
                               label="Пароль"
                               name={'pass'}
                               type={'password'}
                               inputRef={register}
                    />
                </div>
            </div>
        </div>
        <div className={'auth__submit-wrap'}>
            <button
                className={'btn'}
                data-testid={'btnsend'}
                onClick={handleSubmit(onSubmit)}
            ><span>Войти</span>
            </button>
        </div>
    </form>
};

export default LoginBlock;
