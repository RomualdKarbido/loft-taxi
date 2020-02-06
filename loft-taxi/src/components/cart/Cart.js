import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {useSelector, useDispatch} from "react-redux";
import {settPaymentInfoFromOnlyRedux} from "../../store/actions";


const Cart = (props) => {

    const storageInfo = useSelector(state => state.addPaynentInfoReducer);

    const [tooltip, setTooltip] = useState(false);
    const [cvcVisible, setcvcVisible] = useState(false);

    const [cardNumber, setcardNumber] = useState('');
    const [expiryDate, setexpiryDate] = useState(new Date());
    const [cardName, setcardName] = useState('');
    const [cvc, setCvc] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        setcardNumber(storageInfo.cardNumber);
        setcardName(storageInfo.cardName);
        if (storageInfo.expiryDate) {
            setexpiryDate(new Date(storageInfo.expiryDate));
        }
        if (storageInfo.cvc) {
            setCvc(storageInfo.cvc);
        }
    }, [storageInfo]);


    const handleDateChange = date => {
        setexpiryDate(date);
        dispatch(settPaymentInfoFromOnlyRedux({expiryDate: date}));
    };

    const handleChange = (event) => {
        if (event.target.name === 'cardNumber') {
            setcardNumber(event.target.value);
            dispatch(settPaymentInfoFromOnlyRedux({cardNumber: event.target.value}));
        } else if (event.target.name === 'cardName') {
            setcardName(event.target.value);
            dispatch(settPaymentInfoFromOnlyRedux({cardName: event.target.value}));
        } else if (event.target.name === 'cvc') {
            setCvc(event.target.value);
            dispatch(settPaymentInfoFromOnlyRedux({cvc: event.target.value}));
        }
    };

    const visibleCVC = () => {
        cvcVisible ? setcvcVisible(false) : setcvcVisible(true);
    };

    const tooltipedit = () => {
        if (tooltip) {
            setTooltip(false);
            props.tooltipedit(false);
        } else {
            setTooltip(true);
            props.tooltipedit(true);
        }
    };


    if (props.side === 'one') {
        return <div className={'cart__wrap'}>
            <div className={'cart__logo'}></div>
            <div className={'cart__form'}>
                <div className={'cart__line'}>
                    <TextField
                        id="cardNumber"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={cardNumber || ''}
                        type={'number'}
                        name={'cardNumber'}
                        onChange={handleChange}
                        placeholder="1234 1234 1222 1223"
                        label="Номер карты"/>
                </div>
                <div className={'cart__line'}>
                    <div className={'cart__line-short'}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
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
    } else {
        return (
            <div className={'cart__wrap'}>
                <div className={'cart__form'}>
                    <div className={'cart__line'}>
                        <TextField
                            id="cardName"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name={'cardName'}
                            placeholder="USER NAME"
                            type={'text'}
                            label="Имя владельца"
                            value={cardName || ''}
                            onChange={handleChange}
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
                                    value={cvc || ''}
                                    name='cvc'
                                    onChange={handleChange}
                                    placeholder={'123'}
                                    type={'text'}
                                    label=" CVC:"
                                />
                                : <TextField
                                    id="cvc"
                                    name='cvc'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={cvc || ''}
                                    onChange={handleChange}
                                    placeholder={'123'}
                                    type={'password'}
                                    inputProps={{'data-testid': 'cvc'}}
                                    label=" CVC:"
                                />
                            }
                        </div>
                        {
                            cvc.length > 0
                                ? <div data-testid={'eye1'} className={'cart__eye'} onClick={visibleCVC}>
                                    {cvcVisible
                                        ? <i className={'mdi mdi-eye-off-outline'}/>
                                        : <i className={'mdi mdi-eye'}/>
                                    }
                                </div>
                                : null
                        }

                        <div data-testid={'bntTool'} className='cart__tool-btn' onClick={tooltipedit}>
                            <i className='mdi mdi-help-rhombus-outline'/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}


export default Cart;
