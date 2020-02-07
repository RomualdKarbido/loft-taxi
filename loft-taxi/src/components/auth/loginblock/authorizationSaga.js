import {call, put, takeEvery} from "redux-saga/effects";
import {
    setLogOut,
    setMessageError,
    setpreloader,
    setUserAcitve,
    setUserInfo,
    setUserToken
} from "../../../store/actions";


const link = 'https://loft-taxi.glitch.me/';

const getToken = (uinfo) => fetch(`${link}/auth`, {
    method: 'POST', body: JSON.stringify(uinfo), headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получене токена


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
