import {put, takeEvery} from "redux-saga/effects";
import {
    setLogOut, setMessageError,
    setpreloader,
    setRouteTaxiRedux,
    settPaymentInfoFromOnlyRedux,
    setUserToken
} from "../../actions";

export function* logOutSaga() { // выход из приложения
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
        yield put(setRouteTaxiRedux({points: []}));
        yield put(setpreloader({preloaderState: false}))
    });
}
