import reducers from './reducers';

test('reducers', () => {
    let state;
    state = reducers({
        lloginblock: {name: '', pass: '', state: false},
        token: {token: ''},
        pleloader: {preloaderState: false},
        rigistration: {email: '', firstname: '', lastname: '', password: ''},
        messageErrorReducer: {err: ''}
    }, {type: 'USER_LOGOUT'});
    expect(state).toEqual({
        lloginblock: {name: '', pass: '', state: false},
        token: {token: ''},
        pleloader: {preloaderState: false},
        rigistration: {email: '', firstname: '', lastname: '', password: ''},
        messageErrorReducer: {err: ''}
    });
});



test('reducers', () => {
    let state;
    state = reducers({
        lloginblock: {name: 'test5@test.com', pass: '000000', state: true},
        token: {token: 'recxy0WizXJohJ0RW'},
        pleloader: {preloaderState: false},
        rigistration: {email: '', firstname: '', lastname: '', password: ''},
        messageErrorReducer: {err: ''}
    }, {type: 'MESSAGE_ERROR', payload: ''});
    expect(state).toEqual({
        lloginblock: {name: 'test5@test.com', pass: '000000', state: true},
        token: {token: 'recxy0WizXJohJ0RW'},
        pleloader: {preloaderState: false},
        rigistration: {email: '', firstname: '', lastname: '', password: ''},
        messageErrorReducer: {err: ''}
    });
});

