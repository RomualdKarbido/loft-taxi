import React, {useContext} from "react";
import Main from "./Main";
import {render, fireEvent, screen} from "@testing-library/react";
import {Context} from "../../context";

jest.mock('mapbox-gl');


describe('Main', () => {

    it('Проверяем клики по пунктам в хедере', () => {
        const HeaderMock = () => <Main/>;
        let clickLink = '';

        const routR1 = (component, link) => clickLink = link;
        const logOut = () => clickLink = 'Exit';

        const {getByText, getByTestId} = render(
            <Context.Provider value={{logOut, routR1}}>
                <HeaderMock/>
            </Context.Provider>
        );

        const map = getByText('Карта');
        const profile = getByText('Профиль');
        const logo = getByTestId('logo');
        const exit = getByText('Выйти');

        fireEvent.click(map);
        expect(clickLink).toBe('map');
        fireEvent.click(profile);
        expect(clickLink).toBe('profile');
        fireEvent.click(logo);
        expect(clickLink).toBe('profile');
        fireEvent.click(exit);
        expect(clickLink).toBe('Exit');

    });



});

