import React from "react";
import TextField from "@material-ui/core/TextField";
import {setRegistration} from "../../../store/actions";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";


const AuthBlock = (props) => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const registr = (data) => {
        dispatch(setRegistration(data));
    };


    return <form noValidate autoComplete="off">

        <div className={'auth__form'} onSubmit={handleSubmit(registr)}>
            <div>
                <div className={'auth__line'}>
                    <TextField id="standard-basic3"
                               label="Адрес электронной почты"
                               name={'email'}
                               type={'email'}
                               inputRef={register({required: true, minLength: 2})}
                    />

                </div>
                <div className={'auth__line'}>
                    <div className={'auth__halfline'}>
                        <TextField
                            id="standard-basic4"
                            label="Имя"
                            name="name"
                            inputRef={register({required: true, minLength: 2})}
                        />
                    </div>
                    <div className={'auth__halfline'}>
                        <TextField id="standard-basic5"
                                   label="Фамилия"
                                   name={'surname'}
                                   inputRef={register({required: true, minLength: 2})}
                        />
                    </div>
                </div>
                <div className={'auth__line'}>
                    <TextField id="standard"
                               label="Пароль"
                               type="password"
                               name={'password'}
                               inputRef={register({required: true, minLength: 2})}
                    />
                </div>
            </div>
        </div>
        <div className={'auth__submit-wrap'}>
            <button className={'btn'} data-testid={'btnsend'} onClick={handleSubmit(registr)}>
                <span>Зарегистрироваться</span></button>
        </div>
    </form>

}

export default AuthBlock;
