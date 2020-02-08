import {fork} from 'redux-saga/effects'

import {authorizationSaga} from './modules/auth/authorizationSaga'
import {registrationSaga} from './modules/auth/registrationSaga'
import {logOutSaga} from "./modules/mail/logOutSaga";
import {addressListSaga} from "../components/map/addressListSaga";
import {getPayInfoSaga} from "./modules/cart/getPayInfoSaga";
import {paymentSaga} from "./modules/cart/paymentSaga";
import {routeSaga} from "./modules/map/routeSaga";

export default function* () {
    yield fork(authorizationSaga);
    yield fork(registrationSaga);
    yield fork(logOutSaga);
    yield fork(addressListSaga);
    yield fork(getPayInfoSaga);
    yield fork(paymentSaga);
    yield fork(routeSaga);
}
