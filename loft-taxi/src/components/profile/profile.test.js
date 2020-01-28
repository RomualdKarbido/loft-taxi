import React from "react";
import Profile from "./Profile";
import {render, fireEvent} from "@testing-library/react";

describe('profile tests', () => {

    it('Переключение видимости тултипа', () => {
        const {getByTestId, queryByText} = render(<Profile/>);
        const bntTool = getByTestId('bntTool');

        fireEvent.click(bntTool); // первый клик
        expect(queryByText('Три последние цифры на обратной строне карты')).toBeTruthy();

        fireEvent.click(bntTool); // второй клик
        expect(queryByText('Три последние цифры на обратной строне карты')).toBe(null);
    });
});


