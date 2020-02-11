import {call, put, takeEvery} from "redux-saga/effects";
import {requestsTaxi} from "../../../api";
import {
    setLogOut,
    setMessageError,
    setpreloader,
    setRegistration,
    setUserInfo,
    setUserToken
} from "../../actions";

// регистрация нового пользователя

export function* registrationSaga() {
    yield takeEvery(setRegistration, function* (actions) {
        yield put(setpreloader({preloaderState: true})); // включаем прелоадер
        try {
            const result = yield call(requestsTaxi('POST', 'register', actions.payload));
            if (result.success) {
                let userinfo = {
                    name: actions.payload.email,
                    pass: actions.payload.password
                }
                yield put(setUserInfo(userinfo));
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
    })
}
