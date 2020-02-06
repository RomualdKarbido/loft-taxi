import React, {useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import Head from "./head/head";
import {useDispatch, useSelector} from "react-redux";
import {setAdressList, setPayInfo} from "../../store/actions";

const Main = (props) => {
    const isLodined = useSelector(state => state.lloginblock.state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAdressList()); // если redux пустой то получаем адреса
        dispatch(setPayInfo()); // данные пластиковй карты
    }, []);


    if (isLodined) {
        return (
            <React.Fragment>
                <Head/>
                <Switch>
                    <Route path="/map" component={Map}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </React.Fragment>
        )
    } else {
        return <Redirect to={'/'}/>
    }
};

export default Main;


