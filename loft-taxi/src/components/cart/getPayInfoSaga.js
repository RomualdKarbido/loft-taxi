import {call, put, takeEvery, select} from "redux-saga/effects";
import {setPayInfo, settPaymentInfoRedux} from "../../store/actions";
import {requestsTaxi} from "../../api";



export function* getPayInfoSaga() {
    yield takeEvery(setPayInfo, function* (actions) {
        // console.log('Грузим данные пластиковой карты');
        const getToke = state => state.token.token;
        let toke = yield select(getToke); // получаем токен из redux
        try {
            const result = yield call(requestsTaxi('GET', `card?token=${toke}`));
            if (result.success === false && result) { // если ошибка
                console.log(result.error);
            }
            if (result.id && result) { // если пришел ответ
                const getPayInfo = state => state.addPaynentInfoReducer;
                let payIinfo = yield select(getPayInfo); // получаем данные из redux
                if (payIinfo.id === '' || !payIinfo.id) {
                    yield put(settPaymentInfoRedux(result)); // данные из базы пишем в redux
                }
            }
        } catch (e) {
            console.log(e);
        }
    })
}
