import {call, put, takeEvery} from "redux-saga/effects";
import {setAdressList, setAdressListRedux, setpreloader} from "../../store/actions";
import {requestsTaxi} from "../../api";


export function* addressListSaga() {
    yield put(setpreloader({preloaderState: true}));

    yield takeEvery(setAdressList, function* () {

        try {
            const result = yield call(requestsTaxi('GET', 'addressList'));

            let mass = [];
            for (let i = 0; i < result.addresses.length; i++) {
                mass = [...mass, {adress: result.addresses[i]}]
            }
            yield put(setAdressListRedux(mass));
            yield put(setpreloader({preloaderState: false}));
        } catch (e) {
            console.log(e);
        }

    });
}
