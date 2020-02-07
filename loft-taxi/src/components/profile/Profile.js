import React, {useState, useEffect} from 'react';
import Cart from "../cart/Cart";
import Toolltip from "./tooltip/Tooltip";
import {useDispatch, useSelector} from "react-redux";
import {settPaymentInfo, setRouteTaxiRedux} from '../../store/actions'

const Profile = (props) => {

    const [tooll, setTooll] = useState(false);

    const tool = (st) => setTooll(st);
    const dispatch = useDispatch();

    // const payInfo = useSelector(state => state.addPaynentInfoReducer);

    useEffect(() => {
        dispatch(setRouteTaxiRedux({points: []}));
    }, []);


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






