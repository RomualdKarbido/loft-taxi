import React from 'react';
import Btn from "../bnt/Btn";
import Vectormap from "./Vectormap"
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';




class Map extends React.Component {
    constructor(props) {
        super(props);
        this.exampleRef = React.createRef();
    }
    render () {
        return <React.Fragment>

            <div className='map'>
                <div className={'map__content'}>
                    <div className={'map__box'}>
                        <div className={'map__line'}>

                            <InputLabel id="label">Откуда</InputLabel>
                            <Select labelId="label" id="select" value="20">
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                            </Select>

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
            <Vectormap ref={this.exampleRef} />


        </React.Fragment>


    }
}

export default Map;
