import {call, put, takeEvery, select} from "redux-saga/effects";
import {setpreloader, settPaymentInfo} from "../../actions";
import {requestsTaxi} from "../../../api";


export function* paymentSaga() {
    yield takeEvery(settPaymentInfo, function* () {
        yield put(setpreloader({preloaderState: true}));

        const getPayInfo = state => state.addPaynentInfoReducer;
        let payIinfo = yield select(getPayInfo); // получаем данные из redux

        const getToke = state => state.token.token;
        let toke = yield select(getToke); // получаем токен из redux

        payIinfo.token = toke; // добаляем токен в обьъект c данными карты

        try {
            const result = yield call(requestsTaxi('POST', 'card', payIinfo)); // сохраняем в базу
            if (result.success) {

            } else {
                console.log(result.error);

            }
        } catch (e) {
            console.log(e)
        } finally {
            yield put(setpreloader({preloaderState: false}));
        }

    })
}
