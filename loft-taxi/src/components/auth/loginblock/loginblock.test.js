import React, {useContext} from "react";
import LoginBlock from "./LoginBLock";
import {render, fireEvent, screen} from "@testing-library/react";
import {Context} from "../../../context";


describe('x1', () => {
    it('Имя не изменянеся после отправки', () => {
        const Mokk = () => <LoginBlock/>;

        const {queryByTestId, findByText} = render(
            <Context.Provider value={123}>
                <Mokk/>
            </Context.Provider>
        );

        queryByTestId('input1').value = '123';
        fireEvent.click(queryByTestId('btnsend'));
        expect(queryByTestId('input1').value).toBe('123');

    });
    it('Проверка на валидность если симолов больше 3х', () => {
        const Mokk = () => <LoginBlock/>;

        const {queryByTestId, findByText} = render(
            <Context.Provider value={'provider'}>
                <Mokk/>
            </Context.Provider>
        );
        queryByTestId('input1').value = '1233';
        fireEvent.click(queryByTestId('btnsend'));
        const inputName = queryByTestId('input1').children[1].children[0].getAttribute('aria-invalid');
        expect(inputName).toBe('true');
    });


});
