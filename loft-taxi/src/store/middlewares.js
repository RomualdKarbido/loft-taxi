import {setUserInfo, setUserToken, setUserAcitve, setLogOut, setpreloader, setRegistration, setMessageError} from './actions';

const link = 'https://loft-taxi.glitch.me/';

export const authMiddleware = store => next => acion => {

    if (acion.type === setUserInfo.toString()) {
        let name = acion.payload.name;
        let pass = acion.payload.pass;
        store.dispatch(setpreloader({preloaderState: true}));
        store.dispatch(setMessageError({err: ''}));
        fetch(`${link}/auth`, {
            method: 'POST', body: JSON.stringify({
                email: name,
                password: pass
            }), headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(x => {
                if (x.success) {
                    console.log(x);
                    store.dispatch(setUserToken({token: x.token}));
                    store.dispatch(setUserAcitve({state: true}));
                    console.log('перейти на карту');
                    setTimeout(() => {
                        store.dispatch(setpreloader({preloaderState: false}));
                    }, 300)

                } else {
                    console.log(x.success);
                    store.dispatch(setUserToken({token: ''}));
                    store.dispatch(setLogOut());
                    store.dispatch(setMessageError({err: x.error}));
                    setTimeout(() => {
                        store.dispatch(setpreloader({preloaderState: false}));
                    }, 300)
                }

            })
            .catch(error => {
                console.log('Ошибка');
                console.log(error);
            })

    }
    next(acion);
};

export const registrMiddleware = store => next => acion => {

    if (acion.type === setRegistration.toString()) {

        store.dispatch(setpreloader({preloaderState: true}));
        store.dispatch(setMessageError({err: ''}));
        
        fetch(`${link}/register`, {
            method: 'POST', body: JSON.stringify({
                email: acion.payload.email,
                password: acion.payload.password,
                name: acion.payload.name,
                surname: acion.payload.surname
            }), headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(x => {
                if (x.success) {
                    console.log(x);
                    setTimeout(() => {
                        store.dispatch(setpreloader({preloaderState: false}));
                    }, 300)

                } else {
                    store.dispatch(setMessageError({err: x.error}));
                    setTimeout(() => {
                        store.dispatch(setpreloader({preloaderState: false}));
                    }, 300)
                }

            })
            .catch(error => {
                console.log(error);
            })

    }
    next(acion);
};

