import React from 'react';
import Btn from "../bnt/Btn";
import Cart from "../cart/Cart";


class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            tooll: false
        };
    }


    tool = (st) => {
        this.setState({tooll: st});
    }


    render() {
        return (
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
                                            <Cart side={'two'} tooltipedit={this.tool}/>
                                        </div>
                                    </div>

                                </div>
                                {this.state.tooll ? <Toolltip/> : ''}
                                <div className={'profile__modal-btns'}>
                                    <Btn link={'/profile'} bnttext={'Сохранить'}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

    }


}

export default Profile;


function Toolltip() {
    return (
        <div className='profile__tool'>
            <div className='profile__tool-icon'>
                <i className='mdi mdi-help-rhombus-outline'></i>
            </div>
            <div className='profile__tool-box'>
                <div className='profile__tool-text'>Три последние цифры на обратной строне карты</div>
            </div>
        </div>
    )
}
