import React, {useState} from 'react';
import Btn from "../bnt/Btn";
import Vectormap from "./Vectormap";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import {setAdressList, setAdressListRedux} from "../../store/actions";


const Map = (props) => {
    const exampleRef = React.createRef();
    const dispatch = useDispatch();


    let aderssList = useSelector(state => state.addressListReducer);
    let newAddres = []; // начальные адреса


    const [one, setOne] = useState([]);
    const [two, setTwo] = useState([]);

    if (aderssList.length === 0) {
        dispatch(setAdressList()); // если redux пустой то получаем адреса
    }
    for (var key in aderssList) {
        newAddres = [...newAddres, aderssList[key]];
     }
    if (aderssList.length > 0) {
       setOne(aderssList);
        console.log(one);
    }






    console.log(one);

    const selecedAdres = (val, sl) => {
        // console.log(val, sl);
        // if (sl === 'in') {
        //     let twto1 = newAddres.filter(adres => adres.adress === val.adress);
        //     setTwo(twto1);
        // } else if (sl === 'out') {
        //
        // }
        // console.log(two);
    };


    return <React.Fragment>
        <div className='map'>
            <div className={'map__content'}>
                <div className={'map__box'}>
                    <div className={'map__line'}>

                        <Autocomplete
                            id="in"
                            onChange={(event, value) => selecedAdres(value, 'in')}
                            options={newAddres}
                            getOptionLabel={option => option.adress}
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
                            onChange={(event, value) => selecedAdres(value, 'out')}
                            options={newAddres}
                            getOptionLabel={option => option.adress}
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
