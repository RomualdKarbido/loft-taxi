import React from "react";
import {LoginBlock} from "./LoginBLock";
import {render} from "@testing-library/react";




describe('жопа', ()=>{
    it('дичь', () => {
        const Moc = () => {
            <LoginBlock>
                null
            </LoginBlock>
        };
        const { queryBy} = render(<Moc/>);
        queryBy('TextField');
        expect( queryBy('TextField').toBe(true));

    });

});
