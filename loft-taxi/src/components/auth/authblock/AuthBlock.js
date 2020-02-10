import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {setRegistration} from "../../../store/actions";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import * as yup from 'yup'; // for everything


const SignupSchema = yup.object().shape({
    email: yup.string().required().min(3).max(20).email('Invalid email'),
    name: yup.string().required().min(3).max(20),
    surname: yup.string().required().min(3).max(20),
    password: yup.string().required().min(3).max(20)
});

const AuthBlock = (props) => {
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm({
        validationSchema: SignupSchema
    });

    const submitRegisration = (data) => {
        dispatch(setRegistration(data));
    };

    const [erremail, seterremail] = useState(false);
    const [errname, seterrname] = useState(false);
    const [errsurname, sererrsurname] = useState(false);
    const [errpassword, seterrpassword] = useState(false);

    useEffect(() => {
        errors.email ? seterremail(true) : seterremail(false);
        errors.name ? seterrname(true) : seterrname(false);
        errors.surname ? sererrsurname(true) : sererrsurname(false);
        errors.password ? seterrpassword(true) : seterrpassword(false);
    }, [errors]);


    return <form noValidate autoComplete="off">

        <div className={'auth__form'} onSubmit={handleSubmit(submitRegisration)}>
            <div>
                <div className={'auth__line'}>
                    <TextField id="standard-basic3"
                               label="Адрес электронной почты"
                               error={erremail}
                               name={'email'}
                               type={'email'}
                               inputRef={register({required: true, minLength: 2})}
                    />

                </div>
                <div className={'auth__line'}>
                    <div className={'auth__halfline'}>
                        <TextField
                            error={errname}
                            id="standard-basic4"
                            label="Имя"
                            name="name"
                            inputRef={register({required: true, minLength: 2})}
                        />
                    </div>
                    <div className={'auth__halfline'}>
                        <TextField id="standard-basic5"
                                   error={errsurname}
                                   label="Фамилия"
                                   name={'surname'}
                                   inputRef={register({required: true, minLength: 2})}
                        />
                    </div>
                </div>
                <div className={'auth__line'}>
                    <TextField id="standard"
                               error={errpassword}
                               label="Пароль"
                               type="password"
                               name={'password'}
                               inputRef={register({required: true, minLength: 2})}
                    />
                </div>
            </div>
        </div>
        <div className={'auth__submit-wrap'}>
            <button className={'btn'} data-testid={'btnsend'} onClick={handleSubmit(submitRegisration)}>
                <span>Зарегистрироваться</span></button>
        </div>
    </form>

}

export default AuthBlock;
