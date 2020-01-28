export const NAME = 'NAME';
export const PASS = 'PASS';
export const USER_INFO = 'USER_INFO';


export const setNameText = (name) => ({
    type: NAME,
    payload: name
});



export const setPassText = (pass) => ({
    type: PASS,
    payload: pass
});

export const  setUserInfo = ({name, pass, state}) => ({
    type: USER_INFO,
    payload: {name, pass, state}
});
