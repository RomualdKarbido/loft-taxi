import {combineReducers} from 'redux';
import {loginBlockReducer} from './loginblock/reducers'


export default combineReducers({
    lloginblock: loginBlockReducer
});
