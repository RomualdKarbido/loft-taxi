import React, {useContext} from "react";
import LoginBlock from "./LoginBLock";
import {render, fireEvent, screen} from "@testing-library/react";
import {Context} from "../../../context";


describe('Модалка входа', () => {

    it('Проверка на валидность поля login если симолов больше 3х', () => {
        const Mokk = () => <LoginBlock/>;

        const {getByTestId} = render(
            <Context.Provider value={'provider'}>
                <Mokk/>
            </Context.Provider>
        );
        const inputName = getByTestId('input1');
        const BtnSibmit = getByTestId('btnsend');
        // console.log(inputName);
        fireEvent.change(inputName,  {target: {value: 1234}});
        fireEvent.click(BtnSibmit);
        expect(inputName.getAttribute('aria-invalid')).toBe('false');
    });
    it('Проверка на валидность поля login если симолов меньше 3х', () => {
        const Mokk = () => <LoginBlock/>;

        const {getByTestId} = render(
            <Context.Provider value={'provider'}>
                <Mokk/>
            </Context.Provider>
        );
        const inputName = getByTestId('input1');
        const BtnSibmit = getByTestId('btnsend');
        // console.log(inputName);
        fireEvent.change(inputName,  {target: {value: 12}});
        fireEvent.click(BtnSibmit);
        expect(inputName.getAttribute('aria-invalid')).toBe('true');
    });

    it('Проверка на валидность поля пароль (> 3x символов)', () => {
        const Mokk = () => <LoginBlock/>;

        const {getByTestId} = render(
            <Context.Provider value={'provider'}>
                <Mokk/>
            </Context.Provider>
        );
        const inputPass = getByTestId('input2');
        const BtnSibmit = getByTestId('btnsend');
        // console.log(inputName);
        fireEvent.change(inputPass,  {target: {value: 1234}});
        fireEvent.click(BtnSibmit);
        expect(inputPass.getAttribute('aria-invalid')).toBe('false');
    });
    it('Проверка на валидность поля пароль (< 3x символов)', () => {
        const Mokk = () => <LoginBlock/>;

        const {getByTestId} = render(
            <Context.Provider value={'provider'}>
                <Mokk/>
            </Context.Provider>
        );
        const inputPass = getByTestId('input2');
        const BtnSibmit = getByTestId('btnsend');
        // console.log(inputName);
        fireEvent.change(inputPass,  {target: {value: 12}});
        fireEvent.click(BtnSibmit);
        expect(inputPass.getAttribute('aria-invalid')).toBe('true');
    });
});
