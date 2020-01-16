import React from 'react';
import TextField from "@material-ui/core/TextField";

function Cart(props) {

    if (props.side === 'one') {
        return <div className={'cart__wrap'}>
            <div className={'cart__logo'}></div>
            <div className={'cart__form'}>
                <div className={'cart__line'}>
                    <TextField
                        id="numcart"
                        defaultValue="1234 1234 1222 1223"
                        placeholder="1234 1234 1222 1223"
                        label="Номер карты"/>
                </div>
                <div className={'cart__line'}>
                    <div className={'cart__line-short'}>
                        <TextField
                            id="start"
                            defaultValue={'00/00'}
                            placeholder={'00/00'}
                            label="Срок действия"/>
                    </div>
                </div>

            </div>
        </div>
    } else {
        return <div className={'cart__wrap'}>

            <div className={'cart__form'}>
                <div className={'cart__line'}>
                    <TextField
                        id="nameuser"
                        defaultValue="USER NAME"
                        placeholder="USER NAME"
                        type={'text'}
                        label="Имя владельца"/>
                </div>
                <div className={'cart__line'}>
                    <div className={'cart__line-short'}>
                        <TextField
                            id="cvc"
                            defaultValue={'123'}
                            placeholder={'123'}
                            type={'password'}
                            label=" CVC"/>
                    </div>
                </div>

            </div>
        </div>
    }

}

export default Cart;
