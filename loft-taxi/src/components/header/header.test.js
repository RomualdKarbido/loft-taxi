import React, {useContext} from "react";
import Header from "./Header";
import {render, fireEvent, screen} from "@testing-library/react";
import {Context} from "../../../context";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import Vectormap from "../map/Vectormap";



describe('Header', () => {

    it('Хз', () => {
        const HeaderMock = () => <Header/>;
        let x, y = false;

        const routR1 = (component, link) => x = link;
        const routR2 = () =>  y = true;

        const {getByTestId} = render(
            <Context.Provider value={{routR1, routR2}}>
                <HeaderMock>
                    <Map/>
                    <Profile/>
                    <Vectormap/>
                </HeaderMock>
            </Context.Provider>
        );

        const logo = getByTestId('Logo');
        fireEvent.click(logo);

        expect(x).toBe('profile');
    });



});

