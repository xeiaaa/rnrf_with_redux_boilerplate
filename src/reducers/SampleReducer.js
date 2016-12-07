import {
    SAMPLE_ACTION
} from '../actions/types';

//initialize state 
const INITIAL_STATE = {
    name: 'dee',
    age: 23
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case SAMPLE_ACTION:
            return { ...state, name: action.payload }
        default:
            return state;
    }

}