import {call, put, takeEvery} from "redux-saga/effects";
import {setAdressList, setAdressListRedux, setpreloader} from "../../store/actions";

const link = 'https://loft-taxi.glitch.me/';

const getListAdress = () => fetch(`${link}/addressList`, {
    method: 'get', headers: {'content-type': 'application/json'}
}).then(response => response.json()); // получене списка адресов

export function* addressListSaga() {
    yield put(setpreloader({preloaderState: true}));

    yield takeEvery(setAdressList, function* () {
        const result = yield call(getListAdress);
        // console.log(result);
        let mass = [];
        for (let i = 0; i < result.addresses.length; i++) {
            mass = [...mass, {adress: result.addresses[i]}]
        }
        yield put(setAdressListRedux(mass));
        yield put(setpreloader({preloaderState: false}));
    });
}
