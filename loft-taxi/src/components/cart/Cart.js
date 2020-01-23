import React from 'react';
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import PropTypes from "prop-types";


class Cart extends React.Component {

    constructor(props) {
        super(props);
        const dd = new Date();
        this.state = {
            cvcVisible: false,
            tooltip: false,
            selectedDate: dd,
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
            cvc: ''
        };
    }


    handleDateChange = date => {
        this.setState({selectedDate: date});
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

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
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    format="MM/yy"
                                    label="Срок действия"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>

                </div>
            </div>
        } else {
            return <div className={'cart__wrap'}>

                <div className={'cart__form'}>
                    <div className={'cart__line'}>
                        <TextField
                            id="user"
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
                                    name='cvc'
                                    onChange={this.handleChange}
                                    placeholder={'123'}
                                    type={'text'}
                                    label=" CVC:"/>
                                : <TextField
                                    id="cvc"
                                    name='cvc'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleChange}
                                    placeholder={'123'}
                                    type={'password'}
                                    label=" CVC:"/>
                            }
                        </div>
                        {
                            this.state.cvc.length > 0
                                ? <div className={'cart__eye'} onClick={this.visibleCVC}>
                                    {this.state.cvcVisible
                                        ? <i className={'mdi mdi-eye-off-outline'}></i>
                                        : <i className={'mdi mdi-eye'}></i>
                                    }
                                </div>
                                : ''
                        }

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
