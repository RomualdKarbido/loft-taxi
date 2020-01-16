import React from 'react';
import Btn from "../shared/Btn";
import TextField from "@material-ui/core/TextField";


function Map() {
    return (
        <React.Fragment>
            <div className={'map'}>
                <div className={'map__content'}>
                    <div className={'map__box'}>
                        <div className={'map__line'}>
                            <TextField
                                id="start"
                                label="Откуда"/>
                        </div>
                        <div className={'map__line'}>
                            <TextField
                                id="stop"
                                label="Куда"/>
                        </div>
                        <div className={'map__line'}>
                            <Btn bnttext={'Вызвать такси'} link={'/map'}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Map;
