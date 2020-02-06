import React, {useState, useEffect} from 'react';
import Vectormap from "./Vectormap";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setRouteTaxi} from "../../store/actions";


const Map = (props) => {

    const child = React.createRef();
    const dispatch = useDispatch();

    let aderssList = useSelector(state => state.addressListReducer);
    let stateCart = useSelector(state => state.addPaynentInfoReducer.id);
    let listpoint = useSelector(state => state.routerPointReducer.points);

    const [newAddres, setNewAdres] = useState([]); // весь список адресов
    const [oneList, setOnelist] = useState([]);
    const [twoList, setTwoList] = useState([]);

    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');

    const [stateTaxi, setstateTaxi] = useState(false); // статус вызванного такси


    useEffect(() => {
        let adrr = [];
        for (var key in aderssList) {
            adrr = [...adrr, aderssList[key]];
        }
        setNewAdres(adrr);
        setOnelist(newAddres);
        setTwoList(newAddres);
    }, [aderssList]);

    useEffect(() => {
        if (listpoint.length > 0) {
            child.current.drawRoute(listpoint); // запускаем функцию у дочернего компонента
            setstateTaxi(true);
        }
    }, [listpoint]);


    const selecedAdres = (val, sl) => {
        if (val && sl === 'in') {
            let filtredList = newAddres.filter(x => x.adress !== val.adress);
            setTwoList(filtredList);
            setStart(val.adress);
        } else {
            setTwoList(newAddres);
        }
        if (val && sl === 'out') {
            let filtredList = newAddres.filter(x => x.adress !== val.adress);
            setOnelist(filtredList);
            setFinish(val.adress);
        } else {
            setOnelist(newAddres);
        }
    };
    const gettaxi = () => {
        const routeTaxiInfo = {'start': start, 'finish': finish};
        dispatch(setRouteTaxi(routeTaxiInfo)); // если redux пустой то получаем адреса
    };

    const resetRoute = () => {
        dispatch(setRouteTaxi({points: []}))
        setstateTaxi(false);
        setOnelist(newAddres);
        setTwoList(newAddres);
        child.current.drawRoute([]);
    };

    let box = ''; // блок модального окна у него три вида

    if (stateCart && !stateTaxi) {
        box = <div>
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
                <div className='btn' onClick={gettaxi}><span>Вызывать такси</span></div>
            </div>
        </div>
    } else if (!stateCart && !stateTaxi) {
        box = <div className='map__box-error'>
            <div className='map__line'>
                <div className='map__line-title'>Еще немного!</div>
                <span>Убедительная просьба перейти в профиль и ввести данные карты.</span>
            </div>
            <div className='map__line'>
                <Link to={'/profile'} className='btn'><span>Заполнить платежную информацию</span></Link>
            </div>

        </div>
    } else if (stateCart && stateTaxi) {
        box = <div className='map__box-error'>
            <div className='map__line'>
                <div className='map__line-title'>Заказ размещен!</div>
                <span>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</span>
            </div>
            <div className='map__line'>
                <div className='btn' onClick={resetRoute}><span>Сделать новый заказ</span></div>
            </div>

        </div>
    }

    // stateCart

    return <React.Fragment>
        <div className='map'>
            <div className={'map__content'}>
                <div className={'map__box'}>
                    {box}
                </div>
            </div>
        </div>
        <Vectormap ref={child}/>
    </React.Fragment>

}


export default Map;
