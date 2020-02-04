import {takeEvery, call, take} from 'redux-saga/effects';
import {
    setLogOut,
    setMessageError,
    setpreloader,
    setUserAcitve,
    setUserInfo,
    setUserToken
} from './actions'


const link = 'https://loft-taxi.glitch.me/';

const getToken = (uinfo) => fetch(`${link}/auth`, {
    method: 'POST', body: JSON.stringify(uinfo), headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получене токена


export function* testSaga() {
    yield takeEvery(setUserInfo, function* (actions) {
        const result = yield call(getToken, {email: actions.payload.name, password: actions.payload.pass});
        console.log(result);

    });
}
