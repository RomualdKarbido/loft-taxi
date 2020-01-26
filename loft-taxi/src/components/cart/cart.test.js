import React, {useContext} from "react";
import Cart from "./Cart";
import {render, fireEvent, screen} from "@testing-library/react";
import {Context} from "../../context";





describe('Carts test -->', () => {

    it('Когда в поле cvc ввели текст то появляется иконка ' +
        'глаза при клике на глаз тип поля меняется' +
        'на text и обратно на password ', () => {
        const CartnMoks = () => <Cart/>;

        const {getByText, getByTestId} = render(
            <Context.Provider>
                <CartnMoks/>
            </Context.Provider>
        );

        const inputcvc = getByTestId('cvc');

        fireEvent.click(inputcvc);
        fireEvent.change(inputcvc,  {target: {value: '11'}});

        const eye1 = getByTestId('eye1');
        expect(eye1).toBeTruthy();

        fireEvent.click(eye1);
        expect(inputcvc.type).toBe('text');

        fireEvent.click(eye1);
        expect(inputcvc.type).toBe('password');

    });
});

