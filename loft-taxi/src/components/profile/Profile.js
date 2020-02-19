import React, {useState, useEffect} from 'react';
import Toolltip from "./tooltip/Tooltip";
import {useDispatch, useSelector} from "react-redux";
import {
    settPaymentInfo,
    settPaymentInfoFromOnlyRedux,
} from '../../store/actions'
import TextField from "@material-ui/core/TextField";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as yup from "yup";
import {useForm} from "react-hook-form";


const SignupSchema = yup.object().shape({ // валидация
    cardNumber: yup.string().required().min(16).max(16),
    expiryDate: yup.string().required(),
    cardName: yup.string().required().min(3).max(20),
    cvc: yup.string().required().min(3).max(3),
});

const Profile = (props) => {

    const dispatch = useDispatch();
    const storageInfo = useSelector(state => state.addPaynentInfoReducer); // тянем даанные из store
    const {register, handleSubmit, setValue, errors} = useForm({
        validationSchema: SignupSchema
    });

    const [tooll, setTooll] = useState(false);
    const [expiryDate, setexpiryDate] = useState(null);
    const [cvcVisible, setcvcVisible] = useState(false);
    const [eye, seteye] = useState(false);


    const hasError = (inputName) => !!(errors[inputName]); // обработчик ошибок

    useEffect(() => { // подтягиваем дынные из redux при езмениее storageInfo
        if (storageInfo.cardNumber) {
            setValue("cardNumber", storageInfo.cardNumber);
        }
        if (storageInfo.expiryDate) {
            setexpiryDate(storageInfo.expiryDate);
        }
        if (storageInfo.cardName) {
            setValue("cardName", storageInfo.cardName);
        }
        if (storageInfo.cvc) {
            setValue("cvc", storageInfo.cvc);
            seteye(true);
        }
    }, [storageInfo]);

    const visibleCVC = () => {
        cvcVisible ? setcvcVisible(false) : setcvcVisible(true);
    };

    const tooltipedit = () => {
        tooll ? setTooll(false) : setTooll(true);
    };

    const handleDateChangeCVC = date => { // изменение видимости cvc
        date.target.value.length > 0 ? seteye(true) : seteye(false);
    };

    const handleDateChange = date => { // изменение поля календаря
        setexpiryDate(date);
    };


    const setPaymentInfo = (value) => { // сохранение текущего
        value.expiryDate = expiryDate; // допиливаем дату
        dispatch(settPaymentInfoFromOnlyRedux(value)); //обновляе данные в редукс
        dispatch(settPaymentInfo()); // сохраняем на сервере
    };

    // console.log(errors);
    return (
        <React.Fragment>
            <div className={'profile__bg'}>
                <div className={'profile'}>
                    <div className={'profile__content'}>
                        <form noValidate autoComplete="off" onSubmit={handleSubmit(setPaymentInfo)}>
                            <div className={'profile__modal'}>
                                <div className={'profile__modal-title'}>Профиль</div>
                                <div className={'profile__modal-text'}>Способ оплаты</div>
                                <div className={'profile__cartblock'}>
                                    <div className={'profile__cart'}>
                                        <div className={'profile__cart-item'}>
                                            <div className={'cart__wrap'}>
                                                <div className={'cart__logo'}></div>
                                                <div className={'cart__form'}>
                                                    <div className={'cart__line'}>
                                                        <TextField
                                                            id="cardNumber"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            type={'number'}
                                                            name={'cardNumber'}
                                                            inputRef={register}
                                                            error={hasError('cardNumber')}
                                                            placeholder="1234 1234 1222 1223"
                                                            label="Номер карты"/>

                                                    </div>
                                                    <div className={'cart__line'}>
                                                        <div className={'cart__line-short'}>
                                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                <DatePicker
                                                                    id={'expiryDate'}
                                                                    name={'expiryDate'}
                                                                    error={hasError('expiryDate')}
                                                                    inputRef={register}
                                                                    format="MM/yy"
                                                                    label="Срок действия"
                                                                    value={expiryDate}
                                                                    onChange={handleDateChange}
                                                                />
                                                            </MuiPickersUtilsProvider>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'profile__cart'}>
                                        <div className={'profile__cart-item'}>


                                            <div className={'cart__wrap'}>
                                                <div className={'cart__form'}>
                                                    <div className={'cart__line'}>
                                                        <TextField
                                                            id="cardName"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            name={'cardName'}
                                                            error={hasError('cardName')}
                                                            inputRef={register}
                                                            placeholder="USER NAME"
                                                            type={'text'}
                                                            label="Имя владельца"

                                                        />
                                                    </div>
                                                    <div className={'cart__line'}>
                                                        <div className={'cart__line-short'}>
                                                            {cvcVisible
                                                                ? <TextField
                                                                    id="cvc"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    name='cvc'
                                                                    placeholder={'123'}
                                                                    type={'text'}
                                                                    label=" CVC:"
                                                                    error={hasError('cvc')}
                                                                    inputRef={register}
                                                                    onChange={handleDateChangeCVC}
                                                                />
                                                                : <TextField
                                                                    id="cvc"
                                                                    name='cvc'
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}

                                                                    placeholder={'123'}
                                                                    type={'password'}
                                                                    inputProps={{'data-testid': 'cvc'}}
                                                                    label=" CVC:"
                                                                    error={hasError('cvc')}
                                                                    inputRef={register}
                                                                    onChange={handleDateChangeCVC}
                                                                />
                                                            }
                                                        </div>
                                                        {eye
                                                            ? <div data-testid={'eye1'} className={'cart__eye'}
                                                                   onClick={visibleCVC}>
                                                                {cvcVisible
                                                                    ? <i className={'mdi mdi-eye-off-outline'}/>
                                                                    : <i className={'mdi mdi-eye'}/>
                                                                }
                                                            </div>
                                                            : null}

                                                        <div data-testid={'bntTool'} className='cart__tool-btn'
                                                             onClick={tooltipedit}>
                                                            <i className='mdi mdi-help-rhombus-outline'/>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {tooll ? <Toolltip/> : null}
                                <div className={'profile__modal-btns'}>
                                    <button className='btn' onClick={handleSubmit(setPaymentInfo)}>
                                        <span>Coхранить</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Profile;






