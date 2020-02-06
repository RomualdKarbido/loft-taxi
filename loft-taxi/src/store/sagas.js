import {takeEvery, call, take, select, put} from 'redux-saga/effects';
import {
    setLogOut,
    setMessageError,
    setpreloader,
    setRegistration,
    setUserAcitve,
    setUserInfo,
    setUserToken,
    setAdressList,
    setAdressListRedux,
    settPaymentInfo,
    settPaymentInfoRedux,
    setPayInfo, settPaymentInfoFromOnlyRedux
} from './actions'
import get from "redux-actions/lib/utils/get";
import {addPaynentInfoReducer} from "./reducers";


const link = 'https://loft-taxi.glitch.me/';

const getToken = (uinfo) => fetch(`${link}/auth`, {
    method: 'POST', body: JSON.stringify(uinfo), headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получене токена


const setAutorisation = (uinfo) => fetch(`${link}/register`, {
    method: 'POST', body: JSON.stringify(uinfo), headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получене токена при авторизации


const getListAdress = () => fetch(`${link}/addressList`, {
    method: 'get', headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получене списко адресов


const setPaymentInfo = (payInfo) => fetch(`${link}/card`, {
    method: 'post', body: JSON.stringify(payInfo), headers: {'content-type': 'application/json'}
}).then(response => response.json()); // отправка платежной информации

const getPaymentInfo = (token) => fetch(`${link}/card?token=${token}`, {
    method: 'get', headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получение платежной информации

export function* authorizationSaga() {
    yield takeEvery(setUserInfo, function* (actions) {
        yield put(setpreloader({preloaderState: true})); // включаем прелоадер
        const result = yield call(getToken, {email: actions.payload.name, password: actions.payload.pass});

        if (result.success) {
            yield put(setUserToken({token: result.token}));
            yield put(setUserAcitve({state: true}));
            let userInfo = {
                email: actions.payload.name,
                token: result.token
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            yield put(setpreloader({preloaderState: false}));
        } else {
            yield put(setLogOut());
            yield put(setMessageError({err: result.error}));
            yield put(setUserToken({token: ''}));
            localStorage.removeItem('userInfo');
            yield put(setpreloader({preloaderState: false}));
        }
    });
}

export function* registrationSaga() {
    yield takeEvery(setRegistration, function* (actions) {
        yield put(setpreloader({preloaderState: true})); // включаем прелоадер
        const result = yield call(setAutorisation, actions.payload);
        if (result.success) {
            yield put(setUserToken({token: result.token}));
            yield put(setUserAcitve({state: true}));
            let userInfo = {
                email: actions.payload.name,
                token: result.token
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            yield put(setpreloader({preloaderState: false}));
        } else {
            yield put(setLogOut());
            yield put(setMessageError({err: result.error}));
            yield put(setUserToken({token: ''}));
            localStorage.removeItem('userInfo');
            yield put(setpreloader({preloaderState: false}));
        }
    })
}

export function* logOutSaga() {
    yield takeEvery(setLogOut, function* () {
        yield put(setUserToken({token: ''}));
        yield put(settPaymentInfoFromOnlyRedux({
            id: '',
            cardNumber: '',
            expiryDate: '',
            cardName: '',
            cvc: ''
        }));
        localStorage.removeItem('userInfo');
        yield put(setpreloader({preloaderState: false}))
    });
}


export function* addressListSaga() {
    yield put(setpreloader({preloaderState: true}));

    yield takeEvery(setAdressList, function* () {
        const result = yield call(getListAdress);
        // console.log(result);
        let mass = [];
        for (let i = 0; i < result.addresses.length; i++) {
            mass = [...mass, {adress: result.addresses[i]}]
        }
        yield put(setAdressListRedux(mass));
        yield put(setpreloader({preloaderState: false}));

    });
}

export function* paymentSaga() {
    yield takeEvery(settPaymentInfo, function* () {
        yield put(setpreloader({preloaderState: true}));

        const getPayInfo = state => state.addPaynentInfoReducer;
        let payIinfo = yield select(getPayInfo); // получаем данные из redux

        const getToke = state => state.token.token;
        let toke = yield select(getToke); // получаем токен из redux

        payIinfo.token = toke; // добавить токен

        const result = yield call(setPaymentInfo, payIinfo); // сохраняем в базу
        if (result.success) {
            yield put(setpreloader({preloaderState: false}));
        } else {
            console.log(result.error);
            yield put(setpreloader({preloaderState: false}));
        }
    })
}

export function* getPayInfoSaga() {
    yield takeEvery(setPayInfo, function* (actions) {
        console.log('Грузим данные пластиковой карты');
        const getToke = state => state.token.token;
        let toke = yield select(getToke); // получаем токен из redux

        const result = yield call(getPaymentInfo, toke);
        if (result.success === false && result) { // если ошибка
            console.log(result.error);
        }
        if (result.id && result) { // если пришел ответ

            const getPayInfo = state => state.addPaynentInfoReducer;
            let payIinfo = yield select(getPayInfo); // получаем данные из redux

            if (payIinfo.id === '' || !payIinfo.id) {
                yield put(settPaymentInfoRedux(result)); // данные из базы пишем в redux
            }
        }


    })
}
