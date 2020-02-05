import React, {useState} from 'react';
import Cart from "../cart/Cart";
import Toolltip from "./tooltip/Tooltip";
import {useDispatch} from "react-redux";
import {settPaymentInfo} from '../../store/actions'


const Profile = (props) => {

    const [tooll, setTooll] = useState(false);

    const [cardNumber, setcardNumber] = useState('1');
    const [expiryDate, setexpiryDate] = useState('');
    const [cardName, setcardName] = useState('');
    const [cvc, setcvc] = useState('');

    const tool = (st) => setTooll(st);
    const dispatch = useDispatch();

    const setPaymentInfo = () => {
        dispatch(settPaymentInfo({
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardName: cardName,
                cvc: cvc
            }
        ));
    };

    const twocart = (info) => {
        // console.log(info);
        if (info.key === 'cvc') {
            setcvc(info.value);
        } else if (info.key === 'cardName') {
            setcardName(info.value);
        } else if (info.key === 'cardNumber') {
            setcardNumber(info.value);
        } else if (info.key === 'expiryDate') {
            setexpiryDate(info.value);
        }
    }; // получаем данные из полей. сохраняем в стейт


    return (
        <React.Fragment>
            <div className={'profile__bg'}>
                <div className={'profile'}>
                    <div className={'profile__content'}>
                        <form noValidate autoComplete="off">
                            <div className={'profile__modal'}>
                                <div className={'profile__modal-title'}>Профиль</div>
                                <div className={'profile__modal-text'}>Способ оплаты</div>
                                <div className={'profile__cartblock'}>
                                    <div className={'profile__cart'}>
                                        <div className={'profile__cart-item'}>
                                            <Cart side={'one'} info={(info) => twocart(info)}/>
                                        </div>
                                    </div>
                                    <div className={'profile__cart'}>
                                        <div className={'profile__cart-item'}>
                                            <Cart side={'two'} tooltipedit={tool} info={(info) => twocart(info)}/>
                                        </div>
                                    </div>

                                </div>

                                {tooll ? <Toolltip/> : null}

                                <div className={'profile__modal-btns'}>
                                    <div className='btn' onClick={setPaymentInfo}><span>Coхранить</span></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Profile;


