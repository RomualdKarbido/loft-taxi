import React, {useContext} from "react";
import Header from "./Header";
import {render, fireEvent, screen} from "@testing-library/react";
import {Context} from "../../context";
// import Map from "../map/Map";
// import Profile from "../profile/Profile";




describe('Header', () => {

    it('Хз', () => {
        const HeaderMock = () => <Header/>;
        let clickLink = '';

        const routR1 = (component, link) => clickLink = link;
        const logOut = () => clickLink = 'Exit';

        const {getByText} = render(
            <Context.Provider value={{logOut, routR1}}>
                <HeaderMock/>
            </Context.Provider>
        );

        const logo = getByText('Карта');
        fireEvent.click(logo);
        expect(clickLink).toBe('map');
    });



});

