import {combineReducers} from 'redux';
import {setUserInfo, setUserToken, setUserAcitve, setLogOut, setpreloader, setMessageError, setAdressListRedux, settPaymentInfoRedux} from './actions';

const defaultState = {
    name: '',
    state: false,
};

export const loginBlockReducer = (state = defaultState, action) => {


    switch (action.type) {
        case setUserInfo.toString():
            let name = action.payload.name;
            return {
                ...state, name
            };
        case setUserAcitve.toString():
            return {
                ...state, ...action.payload
            };
        case setLogOut.toString():
            return {
                ...state, ...defaultState
            };
        default:
            return state;
    }
};


export const setToken = (state = {token: ''}, action) => {
    switch (action.type) {
        case setUserToken.toString():
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};

export const preloader = (state = {preloaderState: false}, action) => {
    switch (action.type) {
        case setpreloader.toString():
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};



export const messageErrorReducer = (state = {err: ''}, action) => {
    switch (action.type) {
        case setMessageError.toString():
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};

const addresses = [];

export const addressListReducer = (state= addresses, action) => {
    switch (action.type) {
        case setAdressListRedux.toString():
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};
export const addPaynentInfoReducer = (state= {}, action) => {
    switch (action.type) {
        case settPaymentInfoRedux.toString():
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};



export default combineReducers({
    lloginblock: loginBlockReducer,
    token: setToken,
    pleloader: preloader,
    messageErrorReducer: messageErrorReducer,
    addressListReducer: addressListReducer,
    addPaynentInfoReducer: addPaynentInfoReducer
});
