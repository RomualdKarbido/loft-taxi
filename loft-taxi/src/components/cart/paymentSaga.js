import {call, put, takeEvery, select} from "redux-saga/effects";
import {setpreloader, settPaymentInfo} from "../../store/actions";

const link = 'https://loft-taxi.glitch.me/';

const setPaymentInfo = (payInfo) => fetch(`${link}/card`, {
    method: 'post', body: JSON.stringify(payInfo), headers: {'content-type': 'application/json'}
}).then(response => response.json()); // отправка платежной информации


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
