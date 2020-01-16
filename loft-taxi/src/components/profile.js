import React from 'react';
import Btn from "../shared/Btn";


const Profile = () => <div className={'profile__bg'}>
    <div className={'profile'}>
        <div className={'profile__content'}>
            <form noValidate autoComplete="off">
                <div className={'profile__modal'}>
                    <div className={'profile__modal-title'}>Профиль</div>
                    <div className={'profile__modal-text'}>Способ оплаты</div>
                    <div className={'profile__cartblock'}>
                        <div className={'profile__cart'}>
                            <div className={'profile__cart-item'}></div>
                        </div>
                        <div className={'profile__cart'}>
                            <div className={'profile__cart-item'}></div>
                        </div>
                    </div>
                    <div className={'profile__modal-btns'}>
                        <Btn link={'/profile'} bnttext={'Сохранить'}/>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>


export default Profile;
