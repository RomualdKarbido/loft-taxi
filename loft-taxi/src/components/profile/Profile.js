import React, {useState, useEffect} from 'react';
import Cart from "../cart/Cart";
import Toolltip from "./tooltip/Tooltip";
import {useDispatch, useSelector} from "react-redux";
import {settPaymentInfo, setRouteTaxiRedux} from '../../store/actions'

const Profile = (props) => {

    const [tooll, setTooll] = useState(false);

    const tool = (st) => setTooll(st);
    const dispatch = useDispatch();

    const payInfo = useSelector(state => state.addPaynentInfoReducer);
    const [saveBtn, setsaveBtn] = useState(false);

    useEffect(() => {
        dispatch(setRouteTaxiRedux({points: []}));
    }, []);

    useEffect(() => {
        if (payInfo.cardNumber && payInfo.cardNumber.length > 2
            && payInfo.cardName && payInfo.cardName.length > 2
            && payInfo.expiryDate
            && payInfo.cvc && payInfo.cvc.length > 2) {
            setsaveBtn(true);
        } else {setsaveBtn(false)}
    }, [payInfo]);


    const setPaymentInfo = () => {
        dispatch(settPaymentInfo());
    };


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
                                            <Cart side={'one'}/>
                                        </div>
                                    </div>
                                    <div className={'profile__cart'}>
                                        <div className={'profile__cart-item'}>
                                            <Cart side={'two'} tooltipedit={tool}/>
                                        </div>
                                    </div>

                                </div>

                                {tooll ? <Toolltip/> : null}

                                <div className={'profile__modal-btns'}>
                                    {
                                        saveBtn
                                            ? <div className='btn' onClick={setPaymentInfo}><span>Coхранить</span></div>
                                            : <div className='btn btn__disabled'>
                                                <span>Необходимо заполнить все поля</span></div>
                                    }
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






