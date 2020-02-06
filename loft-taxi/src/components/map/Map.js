import React, {useState, useEffect} from 'react';
import Btn from "../bnt/Btn";
import Vectormap from "./Vectormap";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Map = (props) => {

    const exampleRef = React.createRef();
    let aderssList = useSelector(state => state.addressListReducer);
    let stateCart = useSelector(state => state.addPaynentInfoReducer.id);


    const [newAddres, setNewAdres] = useState([]); // весь список адресов
    const [oneList, setOnelist] = useState([]);
    const [twoList, setTwoList] = useState([]);

    useEffect(() => {


        let adrr = [];
        for (var key in aderssList) {
            adrr = [...adrr, aderssList[key]];
        }
        setNewAdres(adrr);
        setOnelist(newAddres);
        setTwoList(newAddres);
    }, [aderssList]);


    const selecedAdres = (val, sl) => {
        if (val && sl === 'in') {
            let filtredList = newAddres.filter(x => x.adress !== val.adress);
            setTwoList(filtredList);
        } else {
            setTwoList(newAddres);
        }
        if (val && sl === 'out') {
            let filtredList = newAddres.filter(x => x.adress !== val.adress);
            setOnelist(filtredList);
        } else {
            setOnelist(newAddres);
        }
    };


    return <React.Fragment>
        <div className='map'>
            <div className={'map__content'}>
                <div className={'map__box'}>
                    {
                        stateCart
                            ? <div>
                                <div className={'map__line'}>

                                    <Autocomplete
                                        id="in"
                                        onChange={(event, value) => selecedAdres(value, 'in')}
                                        options={oneList}
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
                                        options={twoList}
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
                            : <div className='map__box-error'>
                                <div className='map__line'>
                                    <div className='map__line-title'>Еще немного!</div>
                                    <span>Убедительная просьба перейти в профиль и ввести данные карты.</span>
                                </div>
                                <div className='map__line'>
                                    <Link to={'/profile'} className='btn'><span>Заполнить платежную информацию</span></Link>
                                </div>

                            </div>
                    }
                </div>
            </div>
        </div>
        <Vectormap ref={exampleRef}/>
    </React.Fragment>

}


export default Map;
