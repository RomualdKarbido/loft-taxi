import {takeEvery, call, put} from 'redux-saga/effects';
import {
    setpreloader,
    setRouteTaxi, setRouteTaxiRedux
} from '../../actions'

import {requestsTaxi} from "../../../api";

// получение точек маршрута

export function* routeSaga() {
    yield takeEvery(setRouteTaxi, function* (actions) {
        yield put(setpreloader({preloaderState: true}));
        const taxiInfo = actions.payload;
        try {
            const result = yield call(requestsTaxi('GET', `route?address1=${taxiInfo.start}&address2=${taxiInfo.finish}`));
            if (result) {
                yield put(setRouteTaxiRedux({points: result}));
                yield put(setpreloader({preloaderState: false}));
            } else {
                yield put(setRouteTaxiRedux({points: []}));
                yield put(setpreloader({preloaderState: false}));
            }
        } catch (e) {
            console.log(e);
        }
    })
}
