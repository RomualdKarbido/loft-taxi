import {fork} from 'redux-saga/effects'

import {authorizationSaga} from '../components/auth/loginblock/authorizationSaga'
import {registrationSaga} from '../components/auth/authblock/registrationSaga'
import {logOutSaga} from "../components/main/head/logOutSaga";
import {addressListSaga} from "../components/map/addressListSaga";
import {getPayInfoSaga} from "../components/cart/getPayInfoSaga";
import {paymentSaga} from "../components/cart/paymentSaga";
import {routeSaga} from "../components/map/routeSaga";

export default function* () {
    yield fork(authorizationSaga);
    yield fork(registrationSaga);
    yield fork(logOutSaga);
    yield fork(addressListSaga);
    yield fork(getPayInfoSaga);
    yield fork(paymentSaga);
    yield fork(routeSaga);
}
