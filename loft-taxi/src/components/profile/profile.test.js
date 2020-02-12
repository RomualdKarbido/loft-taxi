import React from "react";
import Profile from "./Profile";
import {render, fireEvent} from "@testing-library/react";
import Main from "../main/main";
import {Context} from "../../context";

describe('profile tests', () => {

    it('Переключение видимости тултипа', () => {

        const MokProfile = () => <Profile/>;
        const mapboxgl = null;

        const {getByTestId, queryByText} = render(
            <Context.Provider value={{mapboxgl}}>
                <MokProfile/>
            </Context.Provider>
        );


        const bntTool = getByTestId('bntTool');

        fireEvent.click(bntTool); // первый клик
        expect(queryByText('Три последние цифры на обратной строне карты')).toBeTruthy();

        fireEvent.click(bntTool); // второй клик
        expect(queryByText('Три последние цифры на обратной строне карты')).toBe(null);
    });
});


