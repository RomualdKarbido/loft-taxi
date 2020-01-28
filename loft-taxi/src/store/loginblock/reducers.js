import {NAME, PASS, USER_INFO} from './actions.js';

const defaultState = {
    name: '',
    pass: '',
    state: false
};

export const loginBlockReducer = (state = defaultState, action) => {

    // console.log(state);

    switch (action.type) {
        case USER_INFO:
            return  {
                ...state, ...action.payload
            };
    }
    return state;
}

// export const loginBlockReducer = (state = defaultState, action) => {
//
//     console.log(state);
//
//     switch (action.type) {
//         case NAME:
//             return  {
//                 ...state,
//                 name: action.payload
//             };
//         case PASS:
//             return {
//                 ...state,
//                 pass: action.payload
//             };
//     }
//     return state;
//
// }
