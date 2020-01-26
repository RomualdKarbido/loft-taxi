import {render} from "@testing-library/react";
import Toolltip from "./Tooltip";
import React from "react";

describe('Toolltip', () => {
    it('Переключение видимости тултипа', () => {
        const {getByText} = render(<Toolltip/>);
        const text = getByText('Три последние цифры на обратной строне карты');
        expect(text).toBeInTheDocument();
    });
});
