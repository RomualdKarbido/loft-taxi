import React from 'react';
import TextField from "@material-ui/core/TextField";

class Cart extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            cvcVisible: false,
            tooltip: false
        };
    }

    visibleCVC = () => {
        if (this.state.cvcVisible) {
            this.setState({cvcVisible: false});
        } else {
            this.setState({cvcVisible: true});
        }
    }

    tooltipedit = () => {
        if (this.state.tooltip) {
            this.setState({tooltip: false});
            this.props.tooltipedit(false);
        } else {
            this.setState({tooltip: true});
            this.props.tooltipedit(true);
        }
    }

    render() {
        if (this.props.side === 'one') {
            return <div className={'cart__wrap'}>
                <div className={'cart__logo'}></div>
                <div className={'cart__form'}>
                    <div className={'cart__line'}>
                        <TextField
                            id="numcart"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="1234 1234 1222 1223"
                            label="Номер карты"/>
                    </div>
                    <div className={'cart__line'}>
                        <div className={'cart__line-short'}>
                            <TextField
                                id="start"
                                InputLabelProps={{
                                    shrink: true,
                                }}
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
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="USER NAME"
                            type={'text'}
                            label="Имя владельца"/>
                    </div>
                    <div className={'cart__line'}>
                        <div className={'cart__line-short'}>
                            {this.state.cvcVisible
                                ?
                                <TextField
                                    id="cvc"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder={'123'}
                                    type={'text'}
                                    label=" CVC:"/>
                                : <TextField
                                    id="cvc"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder={'123'}
                                    type={'password'}
                                    label=" CVC:"/>
                            }


                        </div>
                        <div className={'cart__eye'} onClick={this.visibleCVC}>
                            {this.state.cvcVisible
                                ? <i className={'mdi mdi-eye-off-outline'}></i>
                                : <i className={'mdi mdi-eye'}></i>
                            }
                        </div>
                        <div className='cart__tool-btn' onClick={this.tooltipedit}>
                            <i className='mdi mdi-help-rhombus-outline'></i>
                        </div>
                    </div>

                </div>
            </div>
        }
    }

}


export default Cart;
