import {takeEvery, call, put} from 'redux-saga/effects';
import {
    setpreloader,
    setRouteTaxi, setRouteTaxiRedux
} from '../../store/actions'
import get from "redux-actions/lib/utils/get";
const link = 'https://loft-taxi.glitch.me/';




const getRouteTaxi = (adress) => fetch(`${link}//route?address1=${adress.start}&address2=${adress.finish}`, {
    method: 'get', headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получение платежной информации

export function* routeSaga() {
    yield takeEvery(setRouteTaxi, function* (actions) {
        yield put(setpreloader({preloaderState: true}));
        const taxiInfo = actions.payload;
        const result = yield call(getRouteTaxi, taxiInfo);
        if (result) {
            yield put(setRouteTaxiRedux({points: result}));
            yield put(setpreloader({preloaderState: false}));
        } else {
            yield put(setRouteTaxiRedux({points: []}));
            yield put(setpreloader({preloaderState: false}));
        }
    })
}
