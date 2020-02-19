import React from "react";
import Auth from "./Auth";
import {render, fireEvent} from "@testing-library/react";

import {Provider, useSelector} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../../store/reducers";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "../../store/rootSaga";


const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    ));

sagaMiddleware.run(rootSaga);


describe('Проверка переключения модалок входа', () => {
    it('Переключение модального окна логин/аторицазия', () => {

        const {getByTestId} = render(
            <Provider store={store}>
                <Auth/>
            </Provider>
        );
      
        const swithBtn = getByTestId('сhangeModal');
        const title = getByTestId('tile');
        const text = getByTestId('text');

        fireEvent.click(swithBtn);
        expect(title.textContent).toBe('Регистрация');
        expect(swithBtn.textContent).toBe('Вход');
        expect(text.textContent).toBe('Уже зарегистрирован? Вход');
        fireEvent.click(swithBtn);
        expect(title.textContent).toBe('Вход');
        expect(swithBtn.textContent).toBe('Зарегистрируйтесь');
        expect(text.textContent).toBe('Новый пользователь? Зарегистрируйтесь');

    });
});

