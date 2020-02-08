import {call, put, takeEvery} from "redux-saga/effects";
import {requestsTaxi} from '../../../api'
import {
    setLogOut,
    setMessageError,
    setpreloader,
    setUserAcitve,
    setUserInfo,
    setUserToken
} from "../../../store/actions";




export function* authorizationSaga() {
    yield takeEvery(setUserInfo, function* (actions) {
        yield put(setpreloader({preloaderState: true})); // включаем прелоадер
        const result = yield call(requestsTaxi('POST', 'auth', {email: actions.payload.name, password: actions.payload.pass}));
        try {
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
        } catch (e) {
            console.log(e);
        }

    });
}
