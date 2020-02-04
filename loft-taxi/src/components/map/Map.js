import React from "react";
import Btn from "../bnt/Btn";
import Vectormap from "./Vectormap";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch} from "react-redux";
import {setAdressList} from "../../store/actions";


const Map = (props) => {
    const exampleRef = React.createRef();

    const dispatch = useDispatch();
    dispatch(setAdressList());

    const top100Films = [
        {title: 'The Shawshank Redemption', year: 1994},
        {title: 'The Godfather', year: 1972},
        {title: 'The Godfather: Part II', year: 1974},
        {title: 'The Dark Knight', year: 2008},
        {title: '12 Angry Men', year: 1957}
    ];

    return <React.Fragment>
        <div className='map'>
            <div className={'map__content'}>
                <div className={'map__box'}>
                    <div className={'map__line'}>

                        <Autocomplete
                            id="in"
                            options={top100Films}
                            getOptionLabel={option => option.title}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label="Откуда"
                                    fullWidth/>
                            )}
                        />

                    </div>
                    <div className={'map__line'}>
                        <Autocomplete
                            id="out"
                            options={top100Films}
                            getOptionLabel={option => option.title}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label="Куда"
                                    fullWidth/>
                            )}
                        />
                    </div>
                    <div className={'map__line'}>
                        <Btn bnttext={'Вызвать такси'} link={'/map'}/>
                    </div>
                </div>
            </div>
        </div>
        <Vectormap ref={exampleRef}/>
    </React.Fragment>

}


export default Map;
