import {call, put, takeEvery} from "redux-saga/effects";
import {requestsTaxi} from '../../../api'
import {
    setLogOut,
    setMessageError,
    setpreloader,
    setUserAcitve,
    setUserInfo,
    setUserToken
} from "../../actions";

// вход с паролем

export function* authorizationSaga() {
    yield takeEvery(setUserInfo, function* (actions) {
        yield put(setpreloader({preloaderState: true})); // включаем прелоадер
        try {
            const result = yield call(requestsTaxi('POST', 'auth', {email: actions.payload.name, password: actions.payload.pass}));
            if (result.success) {
                yield put(setUserToken({token: result.token}));
                yield put(setUserAcitve({state: true}));
                let userInfo = {
                    email: actions.payload.name,
                    token: result.token
                };
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
            } else {
                yield put(setLogOut());
                yield put(setMessageError({err: result.error}));
                yield put(setUserToken({token: ''}));
                localStorage.removeItem('userInfo');
            }
        } catch (e) {
            console.log(e);
        } finally {
            yield put(setpreloader({preloaderState: false}));
        }

    });
}
