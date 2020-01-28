import React from "react";
import Auth from "./Auth";
import {render, fireEvent, screen} from "@testing-library/react";
import {Context} from "../../context";


describe('Проверка переключения модалок входа', () => {
    it('Переключение модального окна логин/аторицазия', () => {
        const MokkAuth = () => <Auth/>;

        const {getByTestId} = render(
            <Context.Provider value={'provider'}>
                <MokkAuth/>
            </Context.Provider>
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
